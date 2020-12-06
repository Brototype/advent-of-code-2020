const day = require("./day-3.js");

describe("day-3", () => {
  const data = (
    "..##.......\n" +
    "#...#...#..\n" +
    ".#....#..#.\n" +
    "..#.#...#.#\n" +
    ".#...##..#.\n" +
    "..#.##.....\n" +
    ".#.#.#....#\n" +
    ".#........#\n" +
    "#.##...#...\n" +
    "#...##....#\n" +
    ".#..#...#.#"
  ).split("\n");

  describe("part one", () => {
    test("works", () => {
      expect(day.part1(data)).toBe(7);
    });
  });

  describe("part two", () => {
    test("works", () => {
      expect(day.part2(data)).toBe(336);
    });
  });
});
