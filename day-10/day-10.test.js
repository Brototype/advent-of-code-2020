const day = require("./day-10.js");

describe("day-10", () => {
  const data = ("a" + "b").split("\n");

  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(data)).toBe(1);
    });

    test("getDifferences short", () => {
      const jolts = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
      expect(day.getDifferences(jolts)).toEqual([7, 5]);
    });

    test("getDifferences long", () => {
      const jolts = [
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3,
      ];
      expect(day.getDifferences(jolts)).toEqual([22, 10]);
      expect(day.getDifferences(jolts)).toEqual([22, 10]);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      expect(day.part2(data)).toBe(1);
    });
  });
});
