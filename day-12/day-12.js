const { Ship } = require("./ship");

module.exports.part1 = (data) => {
  const ship = new Ship();
  data.forEach((instruction) => {
    ship.move(instruction);
  });

  return (
    Math.abs(ship.currentPosition.north) + Math.abs(ship.currentPosition.east)
  );
};

module.exports.part2 = (data) => {
  return data.length;
};
