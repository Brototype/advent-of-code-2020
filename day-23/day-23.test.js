const day = require("./day-23.js");

describe("day-23", () => {
  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(["389125467"])).toBe("67384529");
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      expect(day.part2(["389125467"])).toBe(149245887792);
    });
  });
});
