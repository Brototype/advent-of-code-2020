const { PocketDimension } = require("./pocket-dimension");
module.exports.part1 = (data) => {
  const pd = new PocketDimension();
  pd.initialize(data);
  pd.runBootProcess();
  return pd.getActiveCubes();
};

module.exports.part2 = (data) => {
  return data.length;
};
