module.exports.RegexTester = class RegexTester {
  constructor(rules = []) {
    this.cleanRules = [];
    rules.forEach((rule) => {
      // = rules.map((r) => r.split(": ")[1].split(" "));
      let pureRuleString = rule.split(": ")[1];
      let address = Number(rule.split(": ")[0]);
      // replace the weird quotes
      if (pureRuleString === '"a"') {
        pureRuleString = "a";
      }
      // replace the weird quotes
      if (pureRuleString === '"b"') {
        pureRuleString = "b";
      }
      //surround options with brackets already
      if (pureRuleString.includes("|")) {
        pureRuleString = "( " + pureRuleString + " )";
      }
      this.cleanRules[address] = pureRuleString;
    });
  }

  createRegex() {
    let firstRuleContainsDigits = /\d/.test(this.cleanRules[0]);
    while (firstRuleContainsDigits) {
      this.replaceDigitsInMainRule();
      firstRuleContainsDigits = /\d/.test(this.cleanRules[0]);
    }
    const currentRuleWithoutSpaces =
      "^" + this.cleanRules[0].split(" ").join("") + "$";

    this.regex = new RegExp(currentRuleWithoutSpaces, "i");
  }

  replaceDigitsInMainRule() {
    const split = this.cleanRules[0].split(" ");
    for (let i = 0; i < split.length; i++) {
      if (Number.isInteger(Number(split[i]))) {
        split[i] = this.cleanRules[split[i]];
      }
    }
    this.cleanRules[0] = split.join(" ");
  }

  numberOfMatching(input) {
    return input.filter((testString) => this.regex.test(testString)).length;
  }
};
