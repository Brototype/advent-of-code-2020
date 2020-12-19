const day = require("./day-19.js");
const { RegexTester } = require("./regex-tester");

describe("day-19", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const data = (
        "0: 4 1 5\n" +
        "1: 2 3 | 3 2\n" +
        "2: 4 4 | 5 5\n" +
        "3: 4 5 | 5 4\n" +
        '4: "a"\n' +
        '5: "b"\n' +
        "\n" +
        "ababbb\n" +
        "bababa\n" +
        "abbbab\n" +
        "aaabbb\n" +
        "aaaabbb"
      ).split("\n");
      expect(day.part1(data)).toBe(2);
    });

    test("example 1", () => {
      const rules = ["0: 1 2", '1: "a"', "2: 1 3 | 3 1", '3: "b"'];
      const regTest = new RegexTester(rules);
      regTest.getRegexpForRule(regTest.cleanRules["0"]);
      const result = regTest.regex;
      expect(result).toEqual(new RegExp("^a(ab|ba)$", "i"));
    });

    test("example 2", () => {
      const rules = [
        "0: 4 1 5",
        "1: 2 3 | 3 2",
        "2: 4 4 | 5 5",
        "3: 4 5 | 5 4",
        '4: "a"',
        '5: "b"',
      ];
      const regTest = new RegexTester(rules);
      regTest.getRegexpForRule(regTest.cleanRules["0"]);
      const result = regTest.regex;
      expect(result).toEqual(
        new RegExp("^a((aa|bb)(ab|ba)|(ab|ba)(aa|bb))b$", "i")
      );
    });

    test("number of Matching", () => {
      const regTest = new RegexTester();
      regTest.regex = new RegExp("^a((aa|bb)(ab|ba)|(ab|ba)(aa|bb))b$", "i");

      const input = ["ababbb", "bababa", "abbbab", "aaabbb", "aaaabbb"];
      const result = regTest.numberOfMatching(input);
      expect(result).toBe(2);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      const demo = (
        "42: 9 14 | 10 1\n" +
        "9: 14 27 | 1 26\n" +
        "10: 23 14 | 28 1\n" +
        '1: "a"\n' +
        "11: 42 31\n" +
        "5: 1 14 | 15 1\n" +
        "19: 14 1 | 14 14\n" +
        "12: 24 14 | 19 1\n" +
        "16: 15 1 | 14 14\n" +
        "31: 14 17 | 1 13\n" +
        "6: 14 14 | 1 14\n" +
        "2: 1 24 | 14 4\n" +
        "0: 8 11\n" +
        "13: 14 3 | 1 12\n" +
        "15: 1 | 14\n" +
        "17: 14 2 | 1 7\n" +
        "23: 25 1 | 22 14\n" +
        "28: 16 1\n" +
        "4: 1 1\n" +
        "20: 14 14 | 1 15\n" +
        "3: 5 14 | 16 1\n" +
        "27: 1 6 | 14 18\n" +
        '14: "b"\n' +
        "21: 14 1 | 1 14\n" +
        "25: 1 1 | 1 14\n" +
        "22: 14 14\n" +
        "8: 42\n" +
        "26: 14 22 | 1 20\n" +
        "18: 15 15\n" +
        "7: 14 5 | 1 21\n" +
        "24: 14 1\n" +
        "\n" +
        "abbbbbabbbaaaababbaabbbbabababbbabbbbbbabaaaa\n" +
        "bbabbbbaabaabba\n" +
        "babbbbaabbbbbabbbbbbaabaaabaaa\n" +
        "aaabbbbbbaaaabaababaabababbabaaabbababababaaa\n" +
        "bbbbbbbaaaabbbbaaabbabaaa\n" +
        "bbbababbbbaaaaaaaabbababaaababaabab\n" +
        "ababaaaaaabaaab\n" +
        "ababaaaaabbbaba\n" +
        "baabbaaaabbaaaababbaababb\n" +
        "abbbbabbbbaaaababbbbbbaaaababb\n" +
        "aaaaabbaabaaaaababaa\n" +
        "aaaabbaaaabbaaa\n" +
        "aaaabbaabbaaaaaaabbbabbbaaabbaabaaa\n" +
        "babaaabbbaaabaababbaabababaaab\n" +
        "aabbbbbaabbbaaaaaabbbbbababaaaaabbaaabba"
      ).split("\n");

      expect(day.part2(demo)).toBe(12);
    });

    test("example wo replacing", () => {
      const rules = [
        "42: 9 14 | 10 1",
        "9: 14 27 | 1 26",
        "10: 23 14 | 28 1",
        '1: "a"',
        "11: 42 31",
        "5: 1 14 | 15 1",
        "19: 14 1 | 14 14",
        "12: 24 14 | 19 1",
        "16: 15 1 | 14 14",
        "31: 14 17 | 1 13",
        "6: 14 14 | 1 14",
        "2: 1 24 | 14 4",
        "0: 8 11",
        "13: 14 3 | 1 12",
        "15: 1 | 14",
        "17: 14 2 | 1 7",
        "23: 25 1 | 22 14",
        "28: 16 1",
        "4: 1 1",
        "20: 14 14 | 1 15",
        "3: 5 14 | 16 1",
        "27: 1 6 | 14 18",
        '14: "b"',
        "21: 14 1 | 1 14",
        "25: 1 1 | 1 14",
        "22: 14 14",
        "8: 42",
        "26: 14 22 | 1 20",
        "18: 15 15",
        "7: 14 5 | 1 21",
        "24: 14 1",
      ];
      const testStrings = [
        "abbbbbabbbaaaababbaabbbbabababbbabbbbbbabaaaa",
        "bbabbbbaabaabba",
        "babbbbaabbbbbabbbbbbaabaaabaaa",
        "aaabbbbbbaaaabaababaabababbabaaabbababababaaa",
        "bbbbbbbaaaabbbbaaabbabaaa",
        "bbbababbbbaaaaaaaabbababaaababaabab",
        "ababaaaaaabaaab",
        "ababaaaaabbbaba",
        "baabbaaaabbaaaababbaababb",
        "abbbbabbbbaaaababbbbbbaaaababb",
        "aaaaabbaabaaaaababaa",
        "aaaabbaaaabbaaa",
        "aaaabbaabbaaaaaaabbbabbbaaabbaabaaa",
        "babaaabbbaaabaababbaabababaaab",
        "aabbbbbaabbbaaaaaabbbbbababaaaaabbaaabba",
      ];

      const regTest = new RegexTester(rules);

      regTest.getRegexpForRule(regTest.cleanRules[0]);

      regTest.replaceSpecialRules();

      expect(regTest.numberOfMatchingWithGrouping(testStrings)).toBe(12);
    });
  });
});
