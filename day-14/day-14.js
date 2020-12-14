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
  return data.length;
};
