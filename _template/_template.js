const fs = require("fs");

const demo = `${__dirname}/demo.txt`;
const input = `${__dirname}/input.txt`;

const data = fs
  .readFileSync(demo)
  .toString()
  .split("\n")
  .filter((x) => x !== "");

part1();
part2();

function part1() {
  console.log("part 1");
}
function part2() {
  console.log("part 2");
}
