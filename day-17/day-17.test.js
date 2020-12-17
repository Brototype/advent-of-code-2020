const day = require("./day-17.js");
const { PocketDimension } = require("./pocket-dimension");

describe("day-17", () => {
  describe("part one", () => {
    test("works with demo", () => {
      const data = (".#.\n" + "..#\n" + "###").split("\n");
      expect(day.part1(data)).toBe(112);
    });
    test("works with input", () => {
      const data = (
        "##......\n" +
        ".##...#.\n" +
        ".#######\n" +
        "..###.##\n" +
        ".#.###..\n" +
        "..#.####\n" +
        "##.####.\n" +
        "##..#.##"
      ).split("\n");
      expect(day.part1(data)).toBe(306);
    });
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});

describe("PocketDimension", () => {
  test("happy flow", () => {
    const data = (".#.\n" + "..#\n" + "###").split("\n");
    const pd = new PocketDimension();

    //Before any cycles:
    pd.initialize(data);
    expect(pd.coordinatesOfActiveCubes.size).toBe(5);
    pd.printLayer(0);

    //After 1 cycle:
    pd.runCycle();

    pd.printLayer(-1);
    pd.printLayer(0);
    pd.printLayer(1);
    expect(pd.coordinatesOfActiveCubes.size).toBe(11);

    //After 2 cycles:
    pd.runCycle();

    pd.printLayer(-2);
    pd.printLayer(-1);
    pd.printLayer(0);
    pd.printLayer(1);
    pd.printLayer(2);
    expect(pd.coordinatesOfActiveCubes.size).toBe(21);

    //After 3 cycles:
    pd.runCycle();

    pd.printLayer(-2);
    pd.printLayer(-1);
    pd.printLayer(0);
    pd.printLayer(1);
    pd.printLayer(2);
    expect(pd.coordinatesOfActiveCubes.size).toBe(38);
  });

  test("demo", () => {
    const data = (".#.\n" + "..#\n" + "###").split("\n");
    const pd = new PocketDimension();
    pd.initialize(data);
    pd.runBootProcess();
    expect(pd.getActiveCubes()).toBe(112);
  });
});
