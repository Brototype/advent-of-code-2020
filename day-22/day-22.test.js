const day = require("./day-22.js");

describe("day-22", () => {
  const input = (
    "Player 1:\n" +
    "9\n" +
    "2\n" +
    "6\n" +
    "3\n" +
    "1\n" +
    "\n" +
    "Player 2:\n" +
    "5\n" +
    "8\n" +
    "4\n" +
    "7\n" +
    "10"
  ).split("\n");
  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(input)).toBe(306);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      expect(day.part2(input)).toBe(291);
    });
  });
});
