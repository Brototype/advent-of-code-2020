const { PocketDimension4d } = require("./pocket-dimension-4d");
const { PocketDimension3d } = require("./pocket-dimension-3d");
module.exports.part1 = (data) => {
  const pd = new PocketDimension3d();
  pd.initialize(data);
  pd.runBootProcess();
  return pd.getActiveCubes();
};

module.exports.part2 = (data) => {
  const pd = new PocketDimension4d();
  pd.initialize(data);
  pd.runBootProcess();
  return pd.getActiveCubes();
};
