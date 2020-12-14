const day = require("./day-14.js");

describe("day-14", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const demo = (
        "mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\n" +
        "mem[8] = 11\n" +
        "mem[7] = 101\n" +
        "mem[8] = 0"
      ).split("\n");
      expect(day.part1(demo)).toEqual(165);
    });

    test("num to bin converter", () => {
      const m = new day.Memory();
      expect(m.dec2bin(11)).toEqual("000000000000000000000000000000001011");
      expect(m.dec2bin(101)).toEqual("000000000000000000000000000001100101");
      expect(m.dec2bin(0)).toEqual("000000000000000000000000000000000000");
    });

    test("apply 11", () => {
      const m = new day.Memory();
      m.mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X";
      m.apply(8, 11);
      expect(m.data.get(8)).toEqual("000000000000000000000000000001001001");
    });

    test("apply 101", () => {
      const m = new day.Memory();
      m.mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X";
      m.apply(7, 101);
      expect(m.data.get(7)).toEqual("000000000000000000000000000001100101");
    });

    test("apply 0", () => {
      const m = new day.Memory();
      m.mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X";
      m.apply(8, 0);
      expect(m.data.get(8)).toEqual("000000000000000000000000000001000000");
    });
  });

  describe("part two", () => {
    test("works with demo", () => {
      const demo = (
        "mask = 000000000000000000000000000000X1001X\n" +
        "mem[42] = 100\n" +
        "mask = 00000000000000000000000000000000X0XX\n" +
        "mem[26] = 1"
      ).split("\n");

      expect(day.part2(demo)).toBe(208);
    });
  });
});
