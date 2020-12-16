const day = require("./day-16.js");

describe("day-16", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const demo = (
        "class: 1-3 or 5-7\n" +
        "row: 6-11 or 33-44\n" +
        "seat: 13-40 or 45-50\n" +
        "\n" +
        "your ticket:\n" +
        "7,1,14\n" +
        "\n" +
        "nearby tickets:\n" +
        "7,3,47\n" +
        "40,4,50\n" +
        "55,2,20\n" +
        "38,6,12"
      ).split("\n");

      expect(day.part1(demo)).toBe(71);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      const demo = (
        "class: 0-1 or 4-19\n" +
        "row: 0-5 or 8-19\n" +
        "seat: 0-13 or 16-19\n" +
        "\n" +
        "your ticket:\n" +
        "11,12,13\n" +
        "\n" +
        "nearby tickets:\n" +
        "3,9,18\n" +
        "15,1,5\n" +
        "5,14,9"
      ).split("\n");

      expect(day.part2(demo, "class")).toBe(12);
    });
  });
});
