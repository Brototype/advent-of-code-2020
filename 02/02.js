const fs = require("fs");

const demo = `${__dirname}/demo.txt`;
const input = `${__dirname}/input.txt`;

const data = fs
  .readFileSync(input)
  .toString()
  .split("\n")
  .filter((x) => x !== "");

part1();
part2();

function part1() {
  let validCount = 0;

  for (let e of data) {
    if (isValid(e)) {
      validCount++;
    }
  }

  console.log("part one:", validCount);

  function isValid(e) {
    const array = e.split(": ");
    const policy = array[0];
    const letterToCheck = policy.split(" ")[1];
    const frequencyString = policy.split(" ")[0];
    const min = parseInt(frequencyString.split("-")[0]);
    const max = parseInt(frequencyString.split("-")[1]);
    const password = array[1];

    const countInPassword = password.replace(
      new RegExp("[^" + letterToCheck + "]", "g"),
      ""
    ).length;
    if (countInPassword >= min && countInPassword <= max) {
      return true;
    } else {
      return false;
    }
  }
}

function part2() {
  let validCount = 0;

  for (let e of data) {
    if (isValid(e)) {
      validCount++;
    }
  }

  console.log("part two:", validCount);

  function isValid(e) {
    const array = e.split(": ");
    const policy = array[0];
    const letterToCheck = policy.split(" ")[1];
    const positionString = policy.split(" ")[0];
    const pos1 = parseInt(positionString.split("-")[0]);
    const pos2 = parseInt(positionString.split("-")[1]);
    const password = array[1];
    let letterInPos1AndNotInPos2 =
      password[pos1 - 1] === letterToCheck &&
      password[pos2 - 1] !== letterToCheck;
    let letterNotInPos1AndInPos2 =
      password[pos1 - 1] !== letterToCheck &&
      password[pos2 - 1] === letterToCheck;
    if (letterInPos1AndNotInPos2 || letterNotInPos1AndInPos2) {
      return true;
    }
    return false;
  }
}
