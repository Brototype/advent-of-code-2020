const { Day3Grid } = require("./grids");

module.exports.part1 = (data) => {
  return getObstacleCount(data);
};

module.exports.part2 = (data) => {
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
      return getObstacleCount(data, movePattern);
    })
    .reduce((previousValue, currentValue) => previousValue * currentValue);

  return obstacleProduct;
};

function getObstacleCount(data, movePattern) {
  const grid = new Day3Grid(data, movePattern);

  let obstacleCount = 0;
  while (!grid.isCurrentPositionInLastRow()) {
    grid.move();
    if (grid.getItemAtCurrentPosition() === "#") {
      obstacleCount++;
    }
  }
  return obstacleCount;
}
