module.exports.RegexTester = class RegexTester {
  ruleToRegExpString = new Map();

  constructor(rules = []) {
    this.cleanRules = {};
    rules.forEach((rule) => {
      // = rules.map((r) => r.split(": ")[1].split(" "));
      let pureRuleString = rule.split(": ")[1];
      let number = rule.split(": ")[0];
      //  replace the weird quotes
      if (pureRuleString === '"a"') {
        pureRuleString = "a";
      }
      // replace the weird quotes
      if (pureRuleString === '"b"') {
        pureRuleString = "b";
      }
      this.cleanRules[number] = pureRuleString;
    });
  }

  replaceSpecialRules() {
    this.cleanRules["8"] = "42 | 42 8";
    this.cleanRules["11"] = "42 31 | 42 11 31";
  }

  getRegexpForRule(rule) {
    if (this.ruleToRegExpString.has(rule)) {
      return this.ruleToRegExpString.get(rule);
    }
    const re = this.createRegexpStringRecursive(rule);
    const regExp = new RegExp("^" + re + "$", "i");
    this.regex = regExp;
    return regExp;
  }

  createRegexpStringRecursive(rule) {
    let regexpString = "";

    if (rule === "a" || rule === "b") {
      // this is just a or b
      regexpString = rule;
    } else if (rule.includes("|")) {
      // in case we see the options pipe
      const options = rule.split(" | ");
      regexpString = `(${this.createRegexpStringRecursive(
        options[0]
      )}|${this.createRegexpStringRecursive(options[1])})`;
    } else {
      // simple reference case
      const ruleNumbers = rule.split(" ");
      regexpString = ruleNumbers
        .map((ruleNumber) =>
          this.createRegexpStringRecursive(this.cleanRules[ruleNumber])
        )
        .join("");
    }
    this.ruleToRegExpString.set(rule, regexpString);
    return regexpString;
  }

  numberOfMatching(input) {
    return input.filter((testString) => this.regex.test(testString)).length;
  }

  numberOfMatchingWithGrouping(inputs) {
    const pattern =
      "^(?<group42>(" +
      this.ruleToRegExpString.get(this.cleanRules[42]) +
      ")+)(?<group31>(" +
      this.ruleToRegExpString.get(this.cleanRules[31]) +
      ")+)$";
    const rule = new RegExp(pattern);

    let sum = 0;
    for (const input of inputs) {
      const matches = rule.exec(input);
      if (matches) {
        const { groups } = matches;
        const matches42 = groups.group42.match(
          new RegExp(this.ruleToRegExpString.get(this.cleanRules[42]), "g")
        ).length;
        const matches31 = groups.group31.match(
          new RegExp(this.ruleToRegExpString.get(this.cleanRules[31]), "g")
        ).length;
        if (matches42 > matches31) {
          sum++;
        }
      }
    }
    return sum;
  }
};
