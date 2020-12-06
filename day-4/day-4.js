const { Passport } = require("./passport");

module.exports.part1 = (data) => {
  const validPassports = [];

  let currentPassport = new Passport();
  data.forEach((row, index) => {
    currentPassport.readLine(row);
    if (row === "" || index === data.length - 1) {
      if (currentPassport.isPassportValidPartOne()) {
        validPassports.push(currentPassport);
      }
      currentPassport = new Passport();
    }
  });

  return validPassports.length;
};

module.exports.part2 = (data) => {
  const validPassports = [];

  let currentPassport = new Passport();
  data.forEach((row, index) => {
    currentPassport.readLine(row);
    if (row === "" || index === data.length - 1) {
      if (currentPassport.isPassportValidPartTwo()) {
        validPassports.push(currentPassport);
      }
      currentPassport = new Passport();
    }
  });

  return validPassports.length;
};
