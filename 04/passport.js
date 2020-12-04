class Passport {
  passportData = {
    byr: undefined,
    iyr: undefined,
    eyr: undefined,
    hgt: undefined,
    hcl: undefined,
    ecl: undefined,
    pid: undefined,
    cid: undefined,
  };

  constructor() {}

  readLine(inputString) {
    const keyValuePairs = inputString.split(" ");
    for (let pair of keyValuePairs) {
      const split = pair.split(":");
      this.passportData[split[0]] = split[1];
    }
  }

  isPassportValidPartOne() {
    if (
      this.passportData.byr &&
      this.passportData.iyr &&
      this.passportData.eyr &&
      this.passportData.hgt &&
      this.passportData.hcl &&
      this.passportData.ecl &&
      this.passportData.pid
    ) {
      return true;
    } else {
      return false;
    }
  }

  isPassportValidPartTwo() {
    if (
      this.isByrValid() &&
      this.isIyrValid() &&
      this.isEyrValid() &&
      this.isHgtValid() &&
      this.isHclValid() &&
      this.isEclValid() &&
      this.isPidValid()
    ) {
      return true;
    } else {
      return false;
    }
  }

  isByrValid() {
    if (!this.passportData.byr) {
      return false;
    }

    const regex = new RegExp("[0-9]{4}", "g");
    const hasFourDigits = regex.test(this.passportData.byr);
    return (
      hasFourDigits &&
      parseInt(this.passportData.byr) >= 1920 &&
      parseInt(this.passportData.byr) <= 2002
    );
  }

  isIyrValid() {
    if (!this.passportData.iyr) {
      return false;
    }

    const regex = new RegExp("[0-9]{4}", "g");
    const hasFourDigits = regex.test(this.passportData.iyr);
    return (
      hasFourDigits &&
      parseInt(this.passportData.iyr) >= 2010 &&
      parseInt(this.passportData.iyr) <= 2020
    );
  }

  isEyrValid() {
    if (!this.passportData.eyr) {
      return false;
    }

    const regex = new RegExp("[0-9]{4}", "g");
    const hasFourDigits = regex.test(this.passportData.eyr);
    return (
      hasFourDigits &&
      parseInt(this.passportData.eyr) >= 2020 &&
      parseInt(this.passportData.eyr) <= 2030
    );
  }

  isHgtValid() {
    if (!this.passportData.hgt) {
      return false;
    }

    const regex = new RegExp("[0-9]*(cm|in)", "g");
    const digitsFollowedByCmOrIn = regex.test(this.passportData.hgt);

    if (!digitsFollowedByCmOrIn) {
      return false;
    }
    const number = parseInt(this.passportData.hgt);

    if (this.passportData.hgt.includes("cm")) {
      return number >= 150 && number <= 193;
    }
    if (this.passportData.hgt.includes("in"))
      return number >= 59 && number <= 76;
  }

  isHclValid() {
    if (!this.passportData.hcl) {
      return false;
    }

    const regex = new RegExp("#([0-9]|[a-f]){6}", "g");
    return regex.test(this.passportData.hcl);
  }

  isEclValid() {
    if (!this.passportData.ecl) {
      return false;
    }

    const regex = new RegExp("amb|blu|brn|gry|grn|hzl|oth", "g");
    return regex.test(this.passportData.ecl);
  }

  isPidValid() {
    if (!this.passportData.pid) {
      return false;
    }

    if (this.passportData.pid.length > 9) {
      return false;
    }

    const regex = new RegExp("[0-9]{9}", "g");
    return regex.test(this.passportData.pid);
  }
}

module.exports.Passport = Passport;
