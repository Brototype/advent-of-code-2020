const day = require("./day-10.js");

describe("day-10", () => {
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
    test("works with demo 1", () => {
      const data = (
        "16\n" +
        "10\n" +
        "15\n" +
        "5\n" +
        "1\n" +
        "11\n" +
        "7\n" +
        "19\n" +
        "6\n" +
        "12\n" +
        "4"
      ).split("\n");
      expect(day.part2(data)).toBe(8);
    });
    test("works with demo 2", () => {
      const data = (
        "28\n" +
        "33\n" +
        "18\n" +
        "42\n" +
        "31\n" +
        "14\n" +
        "46\n" +
        "20\n" +
        "48\n" +
        "47\n" +
        "24\n" +
        "23\n" +
        "49\n" +
        "45\n" +
        "19\n" +
        "38\n" +
        "39\n" +
        "11\n" +
        "1\n" +
        "32\n" +
        "25\n" +
        "35\n" +
        "8\n" +
        "17\n" +
        "7\n" +
        "9\n" +
        "4\n" +
        "2\n" +
        "34\n" +
        "10\n" +
        "3"
      ).split("\n");
      expect(day.part2(data)).toBe(19208);
    });
  });
});
