const day = require("./day-8.js");

describe("day-8", () => {
  describe("part two", () => {
    test("generate inputs", () => {
      const input = ("nop +0\n" + "acc +1\n" + "jmp +1").split("\n");

      expect(day.getAllPossiblePrograms(input)).toHaveLength(3);
      expect(day.getAllPossiblePrograms(input)).toEqual([
        ["nop +0", "acc +1", "jmp +1"],
        ["nop +0", "acc +1", "nop +1"],
        ["jmp +0", "acc +1", "jmp +1"],
      ]);
    });

    test("demo", () => {
      const data = (
        "nop +0\n" +
        "acc +1\n" +
        "jmp +4\n" +
        "acc +3\n" +
        "jmp -3\n" +
        "acc -99\n" +
        "acc +1\n" +
        "jmp -4\n" +
        "acc +6"
      ).split("\n");

      expect(day.part2(data)).toBe(8);
    });
  });
});
