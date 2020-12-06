const day = require("./day-2.js");

describe("day-2", () => {
  const data = ("1-3 a: abcde\n" + "1-3 b: cdefg\n" + "2-9 c: ccccccccc").split(
    "\n"
  );

  describe("part one", () => {
    test("works", () => {
      expect(day.part1(data)).toBe(2);
    });
  });

  describe("part two", () => {
    test("works", () => {
      expect(day.part2(data)).toBe(1);
    });
  });
});
