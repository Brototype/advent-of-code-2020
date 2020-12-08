const { IntCodeCompiler } = require("./intcode-compiler");
module.exports.part1 = (data) => {
  const c = new IntCodeCompiler(data);
  return c.compile();
};

module.exports.part2 = (data) => {
  return data.length;
};
