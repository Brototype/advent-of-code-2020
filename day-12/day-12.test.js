const day = require("./day-12.js");

describe("day-12", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const data = ("F10\n" + "N3\n" + "F7\n" + "R90\n" + "F11").split("\n");
      expect(day.part1(data)).toBe(25);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
