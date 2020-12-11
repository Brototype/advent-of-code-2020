const { SeatGrid } = require("./seat-grid");
module.exports.part1 = (data) => {
  const grid = new SeatGrid(data);

  let changesAfterLastApply = grid.applyRules();

  while (changesAfterLastApply !== 0) {
    changesAfterLastApply = grid.applyRules();
  }
  return grid.getOccupiedSeats();
};

module.exports.part2 = (data) => {
  return data.length;
};
