const day = require("./day-16.js");

describe("day-16", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const aTicket = "101,102,103,104,301,302,303,401,402,403";
      const demo = (
        "class: 1-3 or 5-7\n" +
        "row: 6-11 or 33-44\n" +
        "seat: 13-40 or 45-50\n" +
        "\n" +
        "your ticket:\n" +
        "7,1,14\n" +
        "\n" +
        "nearby tickets:\n" +
        "7,3,47\n" +
        "40,4,50\n" +
        "55,2,20\n" +
        "38,6,12"
      ).split("\n");

      expect(day.part1(demo)).toBe(71);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});
