module.exports.part1 = (data) => {
  let jolts = data.map((x) => parseInt(x));
  const differences = this.getDifferences(jolts);
  return differences[0] * differences[1];
};

module.exports.part2 = (data) => {
  return data.length;
};

module.exports.getDifferences = (jolts) => {
  const tempJolts = [...jolts];

  tempJolts.push(0);
  tempJolts.push(Math.max(...jolts) + 3);
  tempJolts.sort((a, b) => a - b);

  let differencesOf1 = 0;
  let differencesOf3 = 0;

  for (let i = 0; i < tempJolts.length - 1; i++) {
    const delta = tempJolts[i + 1] - tempJolts[i];
    switch (delta) {
      case 1:
        differencesOf1++;
        break;
      case 3:
        differencesOf3++;
        break;
      default:
        throw new Error("unhandled case" + delta);
    }
  }

  return [differencesOf1, differencesOf3];
};
