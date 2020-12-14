module.exports.Memory = class Memory {
  data = new Map();

  constructor() {}

  set mask(mask) {
    this.maskArray = mask.split("");
  }

  apply(address, value) {
    const valueArray = this.dec2bin(value).split("");
    for (let i = 0; i < this.maskArray.length; i++) {
      if (this.maskArray[i] === "1") {
        valueArray[i] = "1";
      }
      if (this.maskArray[i] === "0") {
        valueArray[i] = "0";
      }
    }
    this.data.set(address, valueArray.join(""));
  }

  dec2bin = (dec) => {
    const shortString = (dec >>> 0).toString(2);
    const fullString = "000000000000000000000000000000000000";
    return fullString.substr(0, 36 - shortString.length) + shortString;
  };

  getSum() {
    let sum = 0;
    this.data.forEach((value) => {
      sum += parseInt(value, 2);
    });
    return sum;
  }
};

module.exports.Memory2 = class Memory2 {
  data = new Map();
  constructor() {}

  set mask(mask) {
    this.maskArray = mask.split("");
  }

  apply(address, value) {
    const result = this.dec2bin(address).split("");

    // merge address in bin with mask
    let numberOfX = 0;
    for (let i = 0; i < this.maskArray.length; i++) {
      if (this.maskArray[i] === "1") {
        // overwritten by 1
        result[i] = "1";
      }
      if (this.maskArray[i] === "0") {
        //unchanged
        result[i] = result[i];
      }
      if (this.maskArray[i] === "X") {
        //floating
        result[i] = "X";
        numberOfX++;
      }
    }

    // get all combination with the floating bits
    const numberOfCombinations = Math.pow(2, numberOfX);
    let allAddressCombinations = [[...result]];

    while (allAddressCombinations.length < numberOfCombinations) {
      allAddressCombinations.forEach((address, index) => {
        let indexOfX = address.indexOf("X");
        if (indexOfX !== -1) {
          address[indexOfX] = "0";
          allAddressCombinations.push([...address]);
          address[indexOfX] = "1";
          allAddressCombinations.push([...address]);
          allAddressCombinations.splice(index, 1);
        }
      });
    }

    allAddressCombinations.forEach((key) => {
      let decimal = parseInt(key.join(""), 2);
      this.data.set(decimal, value);
    });
  }

  dec2bin = (dec) => {
    const shortString = (dec >>> 0).toString(2);
    const fullString = "000000000000000000000000000000000000";
    return fullString.substr(0, 36 - shortString.length) + shortString;
  };

  getSum() {
    let sum = 0;
    this.data.forEach((value) => {
      sum += value;
    });
    return sum;
  }
};

module.exports.part1 = (data) => {
  const memory = new this.Memory();
  for (let d = 0; d < data.length; d++) {
    const row = data[d];
    if (row.startsWith("mask")) {
      const mask = row.substr(7);
      memory.mask = mask;
    } else {
      const address = parseInt(
        row.split(" = ")[0].replace("mem[", "").replace("]")
      );
      const value = parseInt(row.split(" = ")[1]);

      memory.apply(address, value);
    }
  }
  return memory.getSum();
};

module.exports.part2 = (data) => {
  const memory = new this.Memory2();
  for (let d = 0; d < data.length; d++) {
    const row = data[d];
    if (row.startsWith("mask")) {
      const mask = row.substr(7);
      memory.mask = mask;
    } else {
      const address = parseInt(
        row.split(" = ")[0].replace("mem[", "").replace("]")
      );
      memory.apply(address, parseInt(row.split(" = ")[1]));
    }
  }
  return memory.getSum();
};
