const day = require("./day-8.js");

describe("day-8", () => {
  const data = ("a" + "b").split("\n");

  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(data)).toBe(1);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      expect(day.part2(data)).toBe(1);
    });
  });
});
