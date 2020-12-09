const day = require("./day-9.js");

describe("day-9", () => {
  const data = ("a" + "b").split("\n");

  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(data)).toBe(1);
    });

    test("getAllPairs", () => {
      const input = [1, 2, 3, 4];
      const expected = [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ];
      expected.sort();
      const actual = day.getAllPairs(input);

      actual.sort();
      expect(actual).toEqual(expected);
    });
  });

  test("valid sums", () => {
    const input = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];
    expect(day.getValidSums(input)).toEqual([3, 4, 5, 5, 6, 7]);
  });

  test("findFirstViolation", () => {
    const data = (
      "35\n" +
      "20\n" +
      "15\n" +
      "25\n" +
      "47\n" +
      "40\n" +
      "62\n" +
      "55\n" +
      "65\n" +
      "95\n" +
      "102\n" +
      "117\n" +
      "150\n" +
      "182\n" +
      "127\n" +
      "219\n" +
      "299\n" +
      "277\n" +
      "309\n" +
      "576"
    ).split("\n");

    expect(day.findFirstViolation(data, 5)).toBe(127);
  });

  test("getLastNNumbers", () => {
    const data = (
      "35\n" +
      "20\n" +
      "15\n" +
      "25\n" +
      "47\n" +
      "40\n" +
      "62\n" +
      "55\n" +
      "65\n" +
      "95\n" +
      "102\n" +
      "117\n" +
      "150\n" +
      "182\n" +
      "127\n" +
      "219\n" +
      "299\n" +
      "277\n" +
      "309\n" +
      "576"
    )
      .split("\n")
      .map((s) => parseInt(s));
    expect(day.getLastNNumbers(5, 5, data)).toEqual([35, 20, 15, 25, 47]);
  });

  describe("part two", () => {
    test("works with demo", () => {
      expect(day.part2(data)).toBe(1);
    });
  });
});
