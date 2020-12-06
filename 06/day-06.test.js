const day = require("./day-06.js");

describe("day-06", () => {
  describe("part one", () => {
    test("returns correct for demo", () => {
      const input =
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
        "b";
      const data = input.split("\n");

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
      const input =
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
        "b";
      const actual = day.splitIntoGroups(input.split("\n"));
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
      const input =
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
        "b";

      expect(day.part2(input.split("\n"))).toBe(6);
    });

    test("countOfYes if all", () => {
      let groupInput = "abc";
      expect(day.countsOfYesIfAll(groupInput.split("\n"))).toBe(3);

      groupInput = "a\n" + "b\n" + "c";
      expect(day.countsOfYesIfAll(groupInput.split("\n"))).toBe(0);

      groupInput = "ab\n" + "ac";
      expect(day.countsOfYesIfAll(groupInput.split("\n"))).toBe(1);

      groupInput = "a\n" + "a\n" + "a\n" + "a";
      expect(day.countsOfYesIfAll(groupInput.split("\n"))).toBe(1);

      groupInput = "b";
      expect(day.countsOfYesIfAll(groupInput.split("\n"))).toBe(1);
    });
  });
});
