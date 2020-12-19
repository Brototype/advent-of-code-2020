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
    /*
     okay so the problem is with the new replaced rule we create an infinite loop
     good thing is: 8 and 11 are only part of the rule for 0 in our input (0: 8 11)
     that is the same for the example as well - is suppose bastis input looks the same
     that means we can get the rules for 42 and 31 and do some magic calculation
    */

    this.cleanRules["8"] = "42 | 42 8"; // 8 can be either 42 or 42 8 => so 42 42 at least
    this.cleanRules["11"] = "42 31 | 42 11 31"; // 11 can be 42 31 or 42 11 31 => so 42 41 31 31 at least

    const ruleFor42 = this.ruleToRegExpString.get(this.cleanRules[42]);
    const ruleFor31 = this.ruleToRegExpString.get(this.cleanRules[31]);

    //42 at least once and 31 at the end and at least once
    const groupPattern =
      "^(?<group42>(" + ruleFor42 + ")+)(?<group31>(" + ruleFor31 + ")+)$";
    const rule = new RegExp(groupPattern);

    let sum = 0;
    for (const input of inputs) {
      const matches = rule.exec(input);
      if (matches) {
        const { groups } = matches;
        const matchesInGroup42 = groups.group42.match(
          new RegExp(ruleFor42, "g")
        ).length;
        const matchesInGroup31 = groups.group31.match(
          new RegExp(ruleFor31, "g")
        ).length;
        // because of the rule 8 we need to have more 42s than 31s
        if (matchesInGroup42 > matchesInGroup31) {
          sum++;
        }
      }
    }
    return sum;
  }
};
