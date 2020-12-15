const day = require("./day-15.js");

describe("day-15", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const demo = "0,3,6".split("\n");
      expect(day.part1(demo)).toBe(436);
    });

    test("works with demo2", () => {
      const demo = "1,3,2".split("\n");
      expect(day.part1(demo)).toBe(1);
    });

    test("works with demo3", () => {
      const demo = "2,1,3".split("\n");
      expect(day.part1(demo)).toBe(10);
    });

    test("works with demo4", () => {
      const demo = "1,2,3".split("\n");
      expect(day.part1(demo)).toBe(27);
    });

    test("works with demo5", () => {
      const demo = "2,3,1".split("\n");
      expect(day.part1(demo)).toBe(78);
    });

    test("works with demo5", () => {
      const demo = "3,2,1".split("\n");
      expect(day.part1(demo)).toBe(438);
    });

    test("works with demo5", () => {
      const demo = "3,1,2".split("\n");
      expect(day.part1(demo)).toBe(1836);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
