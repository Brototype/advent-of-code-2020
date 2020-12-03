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

function getObstacleCount(movePattern) {
  const grid = new Day3Grid(data, movePattern);

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
  return obstacleCount;
}

function part1() {
  console.log("part 1");
  console.log("obstacles", getObstacleCount());
}

function part2() {
  console.log("part 2");
  const movePatterns = [
    { stepsRight: 1, stepsDown: 1 },
    { stepsRight: 3, stepsDown: 1 },
    { stepsRight: 5, stepsDown: 1 },
    { stepsRight: 7, stepsDown: 1 },
    { stepsRight: 1, stepsDown: 2 },
  ];

  let obstacleCounts = [];
  const obstacleProduct = movePatterns
    .map((movePattern) => {
      return getObstacleCount(movePattern);
    })
    .reduce((previousValue, currentValue) => previousValue * currentValue);

  console.log("obstacle product", obstacleProduct);
}
