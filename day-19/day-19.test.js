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
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});

describe("regexTester", () => {
  test("example 1", () => {
    const rules = ["0: 1 2", '1: "a"', "2: 1 3 | 3 1", '3: "b"'];
    const regTest = new RegexTester(rules);
    regTest.createRegex();
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
    regTest.createRegex();
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
