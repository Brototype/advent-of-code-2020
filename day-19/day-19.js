const { RegexTester } = require("./regex-tester");
module.exports.part1 = (data) => {
  const rules = data.filter((d) => d.includes(":"));
  const testStrings = data.filter((d) => d.length > 0 && !d.includes(":"));
  const regexTester = new RegexTester(rules);
  regexTester.createRegex();
  return regexTester.numberOfMatching(testStrings);
};

module.exports.part2 = (data) => {
  return data.length;
};
