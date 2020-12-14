const day = require("./day-13.js");

describe("day-13", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const data = ("939\n" + "7,13,x,x,59,x,31,19").split("\n");
      expect(day.part1(data)).toBe(295);
    });
  });
  describe("part two", () => {
    test("works with demo 1", () => {
      const data = ("939\n" + "7,13,x,x,59,x,31,19").split("\n");
      expect(day.part2(data)).toBe(1068781);
    });
    test("works with demo 2", () => {
      const data = ("939\n" + "17,x,13,19").split("\n");
      expect(day.part2(data)).toBe(3417);
    });
    test("works with demo 3", () => {
      const data = ("939\n" + "67,7,59,61").split("\n");
      expect(day.part2(data)).toBe(754018);
    });
    test("works with demo 4", () => {
      const data = ("939\n" + "67,x,7,59,61").split("\n");
      expect(day.part2(data)).toBe(779210);
    });
    test("works with demo 5", () => {
      const data = ("939\n" + "67,7,x,59,61").split("\n");
      expect(day.part2(data)).toBe(1261476);
    });
    test("works with demo 5", () => {
      const data = ("939\n" + "1789,37,47,1889").split("\n");
      expect(day.part2(data)).toBe(1202161486);
    });
  });
});
