const day = require("./day-21.js");

describe("day-21", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const input = (
        "mxmxvkd kfcds sqjhc nhms (contains dairy, fish)\n" +
        "trh fvjkl sbzzf mxmxvkd (contains dairy)\n" +
        "sqjhc fvjkl (contains soy)\n" +
        "sqjhc mxmxvkd sbzzf (contains fish)"
      ).split("\n");

      expect(day.part1(input)).toBe(5);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
