const day = require("./day-11.js");
const { SeatGrid } = require("./seat-grid");

describe("day-11", () => {
  const mainDemo = (
    "L.LL.LL.LL\n" +
    "LLLLLLL.LL\n" +
    "L.L.L..L..\n" +
    "LLLL.LL.LL\n" +
    "L.LL.LL.LL\n" +
    "L.LLLLL.LL\n" +
    "..L.L.....\n" +
    "LLLLLLLLLL\n" +
    "L.LLLLLL.L\n" +
    "L.LLLLL.LL"
  ).split("\n");

  describe("part one", () => {
    test("get total occupied seats", () => {
      const numberOfChanges = day.part1(mainDemo);
      expect(numberOfChanges).toBe(37);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
