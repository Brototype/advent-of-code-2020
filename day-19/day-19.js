const { RegexTester } = require("./regex-tester");
module.exports.part1 = (data) => {
  const rules = data.filter((d) => d.includes(":"));
  const testStrings = data.filter((d) => d.length > 0 && !d.includes(":"));
  const regexTester = new RegexTester(rules);
  regexTester.getRegexpForRule(regexTester.cleanRules[0]);
  return regexTester.numberOfMatching(testStrings);
};

module.exports.part2 = (data) => {
  const rules = data.filter((d) => d.includes(":"));
  const testStrings = data.filter((d) => d.length > 0 && !d.includes(":"));
  const regexTester = new RegexTester(rules);

  regexTester.getRegexpForRule(regexTester.cleanRules[0]);
  // replace with loop rules
  regexTester.replaceSpecialRules();

  return regexTester.numberOfMatchingWithGrouping(testStrings);
};
