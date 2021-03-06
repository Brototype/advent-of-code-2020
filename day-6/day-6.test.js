const day = require("./day-6.js");

describe("day-6", () => {
  const data = (
    "abc\n" +
    "\n" +
    "a\n" +
    "b\n" +
    "c\n" +
    "\n" +
    "ab\n" +
    "ac\n" +
    "\n" +
    "a\n" +
    "a\n" +
    "a\n" +
    "a\n" +
    "\n" +
    "b"
  ).split("\n");

  describe("part one", () => {
    test("returns correct for demo", () => {
      expect(day.part1(data)).toBe(11);
    });

    test("countOfYes if any", () => {
      let groupInput = "abc";
      expect(day.countsOfYesIfAny(groupInput.split("\n"))).toBe(3);

      groupInput = "a\n" + "b\n" + "c";
      expect(day.countsOfYesIfAny(groupInput.split("\n"))).toBe(3);

      groupInput = "ab\n" + "ac";
      expect(day.countsOfYesIfAny(groupInput.split("\n"))).toBe(3);

      groupInput = "a\n" + "a\n" + "a\n" + "a";
      expect(day.countsOfYesIfAny(groupInput.split("\n"))).toBe(1);

      groupInput = "b";
      expect(day.countsOfYesIfAny(groupInput.split("\n"))).toBe(1);
    });

    test("split into groups", () => {
      const actual = day.splitIntoGroups(data);
      expect(actual).toHaveLength(5);
      expect(actual[0]).toEqual(["abc"]);
      expect(actual[1]).toEqual(["a", "b", "c"]);
      expect(actual[2]).toEqual(["ab", "ac"]);
      expect(actual[3]).toEqual(["a", "a", "a", "a"]);
      expect(actual[4]).toEqual(["b"]);
    });
  });

  describe("part two", () => {
    test("returns expected demo value", () => {
      expect(day.part2(data)).toBe(6);
    });

    test("countOfYes if all", () => {
      let groupInputData = "abc".split("\n");
      expect(day.countsOfYesIfAll(groupInputData)).toBe(3);

      groupInputData = ("a\n" + "b\n" + "c").split("\n");
      expect(day.countsOfYesIfAll(groupInputData)).toBe(0);

      groupInputData = ("ab\n" + "ac").split("\n");
      expect(day.countsOfYesIfAll(groupInputData)).toBe(1);

      groupInputData = ("a\n" + "a\n" + "a\n" + "a").split("\n");
      expect(day.countsOfYesIfAll(groupInputData)).toBe(1);

      groupInputData = "b".split("\n");
      expect(day.countsOfYesIfAll(groupInputData)).toBe(1);
    });
  });
});
