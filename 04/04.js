const fs = require("fs");
const { Passport } = require("./passport");

const demo = `${__dirname}/demo.txt`;
const input = `${__dirname}/input.txt`;

const data = fs.readFileSync(input).toString().split("\n");

part1();
part2();

function part1() {
  console.log("part 1");

  const validPassports = [];

  let currentPassport = new Passport();
  data.forEach((row, index) => {
    currentPassport.readLine(row);
    if (row === "" || index === data.length - 1) {
      if (currentPassport.isPassportValid()) {
        validPassports.push(currentPassport);
      }
      currentPassport = new Passport();
    }
  });

  console.log(validPassports.length);
}

function part2() {
  console.log("part 2");
}
