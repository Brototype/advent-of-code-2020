const day = require("./day-7.js");

describe("day-7", () => {
  const data = (
    "light red bags contain 1 bright white bag, 2 muted yellow bags.\n" +
    "dark orange bags contain 3 bright white bags, 4 muted yellow bags.\n" +
    "bright white bags contain 1 shiny gold bag.\n" +
    "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\n" +
    "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\n" +
    "dark olive bags contain 3 faded blue bags, 4 dotted black bags.\n" +
    "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\n" +
    "faded blue bags contain no other bags.\n" +
    "dotted black bags contain no other bags."
  ).split("\n");

  describe("part one", () => {
    test("works with demo", () => {
      expect(day.part1(data)).toBe(4);
    });

    test("getAll recursively shiny gold", () => {
      const map = day.toContainedInMap(data);
      const result = day.getAllRecursiveContainers(map, "shiny gold");
      const expected = [
        "bright white",
        "muted yellow",
        "dark orange",
        "light red",
      ];
      expected.sort();
      expect(result.sort()).toEqual(expected);
    });

    test("getAll recursively muted yellow", () => {
      const map = day.toContainedInMap(data);
      const result = day.getAllRecursiveContainers(map, "muted yellow");
      const expected = ["light red", "dark orange"];
      expected.sort();
      expect(result.sort()).toEqual(expected);
    });

    test("getAll recursively bright white", () => {
      const map = day.toContainedInMap(data);
      const result = day.getAllRecursiveContainers(map, "bright white");
      const expected = ["light red", "dark orange"];
      expected.sort();
      expect(result.sort()).toEqual(expected);
    });

    test("can addToMap normal", () => {
      const map = new Map();
      const row =
        "light red bags contain 1 bright white bag, 2 muted yellow bags.";
      const expected = new Map();
      expected.set("bright white", ["light red"]);
      expected.set("muted yellow", ["light red"]);
      expect(day.addToMap(map, row)).toEqual(expected);
    });

    test("can addToMap none", () => {
      const map = new Map();
      const row = "faded blue bags contain no other bags.";
      const expected = new Map();
      expect(day.addToMap(map, row)).toEqual(expected);
    });
  });

  describe("part two", () => {
    const data = (
      "shiny gold bags contain 2 dark red bags.\n" +
      "dark red bags contain 2 dark orange bags.\n" +
      "dark orange bags contain 2 dark yellow bags.\n" +
      "dark yellow bags contain 2 dark green bags.\n" +
      "dark green bags contain 2 dark blue bags.\n" +
      "dark blue bags contain 2 dark violet bags.\n" +
      "dark violet bags contain no other bags."
    ).split("\n");

    test("works with second demo", () => {
      expect(day.part2(data)).toBe(126);
    });

    test("works with first demo", () => {
      const data = (
        "light red bags contain 1 bright white bag, 2 muted yellow bags.\n" +
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.\n" +
        "bright white bags contain 1 shiny gold bag.\n" +
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\n" +
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\n" +
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.\n" +
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\n" +
        "faded blue bags contain no other bags.\n" +
        "dotted black bags contain no other bags."
      ).split("\n");
      expect(day.part2(data)).toBe(32);
    });

    test("convert to contains map", () => {
      const data = "shiny gold bags contain 2 dark red bags.".split("\n");
      const expected = new Map();
      expected.set("shiny gold", [{ count: 2, id: "dark red" }]);
      expect(day.convertToContainsMap(data)).toEqual(expected);
    });

    test("convert to contains map", () => {
      const data = (
        "shiny gold bags contain 2 dark red bags.\n" +
        "dark red bags contain 2 dark orange bags."
      ).split("\n");
      const expected = new Map();
      expected.set("shiny gold", [{ count: 2, id: "dark red" }]);
      expected.set("dark red", [{ count: 2, id: "dark orange" }]);
      expect(day.convertToContainsMap(data)).toEqual(expected);
    });
  });
});
