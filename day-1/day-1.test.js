const day = require("./day-1.js");

describe("day-1", () => {
  const data = (
    "1721\n" +
    "979\n" +
    "366\n" +
    "299\n" +
    "675\n" +
    "1456"
  ).split("\n");

  describe("part one", () => {
    test("works", () => {
      expect(day.part1(data)).toBe(514579);
    });
  });

  describe("part two", () => {
    test("works", () => {
      expect(day.part2(data)).toBe(241861950);
    });
  });
});
