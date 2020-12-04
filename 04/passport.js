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

  isPassportValid() {
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
}

module.exports.Passport = Passport;
