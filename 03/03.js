const fs = require("fs");
const { Day3Grid } = require("./grids");
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
  console.log("part 1");
  for (let row = 0; row < data.length; row++) {
    console.log(data[row]);
  }
  const grid = new Day3Grid(data);

  console.log("current position", grid.getCurrentPosition());
  console.log("current obstacle", grid.getItemAtCurrentPosition());

  let obstacleCount = 0;
  while (!grid.isCurrentPositionInLastRow()) {
    console.log("move");
    grid.move();
    console.log("current position", grid.getCurrentPosition());
    console.log("current obstacle", grid.getItemAtCurrentPosition());
    console.log("----");
    if (grid.getItemAtCurrentPosition() === "#") {
      obstacleCount++;
    }
  }
  console.log("obstacles", obstacleCount);
}

function part2() {
  console.log("part 2");
}
