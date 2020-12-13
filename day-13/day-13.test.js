const day = require("./day-13.js");

describe("day-13", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const data = ("939\n" + "7,13,x,x,59,x,31,19").split("\n");
      expect(day.part1(data)).toBe(295);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
