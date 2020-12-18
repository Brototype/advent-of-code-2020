const { Calculator } = require("./calculator");
module.exports.part1 = (data) => {
  const calc = new Calculator();
  return data
    .map((eq) => calc.solve(eq))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

module.exports.part2 = (data) => {
  return data.length;
};
