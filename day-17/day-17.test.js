const day = require("./day-17.js");
const { PocketDimension4d } = require("./pocket-dimension-4d");
const { PocketDimension3d } = require("./pocket-dimension-3d");

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
    test("works with demo", () => {
      const data = (".#.\n" + "..#\n" + "###").split("\n");
      expect(day.part2(data)).toBe(848);
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
      expect(day.part2(data)).toBe(2572);
    });
  });
});

describe("PocketDimension3d", () => {
  test("happy flow", () => {
    const data = (".#.\n" + "..#\n" + "###").split("\n");
    const pd = new PocketDimension3d();

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
    const pd = new PocketDimension3d();
    pd.initialize(data);
    pd.runBootProcess();
    expect(pd.getActiveCubes()).toBe(112);
  });
});

describe("PocketDimension4d", () => {
  test("happy path", () => {
    const pd = new PocketDimension4d();
    const data = (".#.\n" + "..#\n" + "###").split("\n");
    pd.initialize(data);

    pd.printLayer(0, 0);

    pd.runCycle();
    // after 1 cycle
    pd.printLayer(-1, -1);
    pd.printLayer(0, -1);
    pd.printLayer(-1, 0);
    pd.printLayer(0, 0);
    pd.printLayer(1, 0);
    pd.printLayer(-1, 1);
    pd.printLayer(0, 1);
    pd.printLayer(1, 1);
    expect(pd.coordinatesOfActiveCubes.size).toBe(29);

    pd.runCycle();
    // after 1 cycle
    expect(pd.coordinatesOfActiveCubes.size).toBe(60);
  });
  test("80 neighbors", () => {
    const pd = new PocketDimension4d();
    const data = ".\n".split("\n");
    pd.initialize(data);
    const n = pd.getNewNeighbors("0,0,0,0");
    expect(n).toHaveLength(80);
  });

  test("demo", () => {
    const data = (".#.\n" + "..#\n" + "###").split("\n");
    const pd = new PocketDimension4d();
    pd.initialize(data);
    pd.runBootProcess();
    expect(pd.getActiveCubes()).toBe(848);
  });
});
