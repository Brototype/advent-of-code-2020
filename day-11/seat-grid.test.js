const day = require("./day-11.js");
const { SeatGrid } = require("./seat-grid");

describe("seat grid", () => {
  const mainDemo = (
    "L.LL.LL.LL\n" +
    "LLLLLLL.LL\n" +
    "L.L.L..L..\n" +
    "LLLL.LL.LL\n" +
    "L.LL.LL.LL\n" +
    "L.LLLLL.LL\n" +
    "..L.L.....\n" +
    "LLLLLLLLLL\n" +
    "L.LLLLLL.L\n" +
    "L.LLLLL.LL"
  ).split("\n");

  test("get total occupied seats", () => {
    const grid = new SeatGrid(
      (
        "#.#L.L#.##\n" +
        "#LLL#LL.L#\n" +
        "L.#.L..#..\n" +
        "#L##.##.L#\n" +
        "#.#L.LL.LL\n" +
        "#.#L#L#.##\n" +
        "..L.L.....\n" +
        "#L#L##L#L#\n" +
        "#.LLLLLL.L\n" +
        "#.#L#L#.##"
      ).split("\n")
    );
    const occupiedSeats = grid.getOccupiedSeats();
    expect(occupiedSeats).toBe(37);
  });

  test("no more changes possible", () => {
    const grid = new SeatGrid(
      (
        "#.#L.L#.##\n" +
        "#LLL#LL.L#\n" +
        "L.#.L..#..\n" +
        "#L##.##.L#\n" +
        "#.#L.LL.LL\n" +
        "#.#L#L#.##\n" +
        "..L.L.....\n" +
        "#L#L##L#L#\n" +
        "#.LLLLLL.L\n" +
        "#.#L#L#.##"
      ).split("\n")
    );
    const numberOfChanges = grid.applyRules();
    expect(numberOfChanges).toBe(0);
  });

  test("number of changes", () => {
    const input = (
      "#.##.##.##\n" +
      "#######.##\n" +
      "#.#.#..#..\n" +
      "####.##.##\n" +
      "#.##.##.##\n" +
      "#.#####.##\n" +
      "..#.#.....\n" +
      "##########\n" +
      "#.######.#\n" +
      "#.#####.##"
    ).split("\n");
    const g = new SeatGrid(input);
    const changes = g.applyRules();
    expect(changes).toBe(51);
  });

  test("works with demo step 1", () => {
    const grid = new SeatGrid(mainDemo);
    grid.applyRules();

    const expected = (
      "#.##.##.##\n" +
      "#######.##\n" +
      "#.#.#..#..\n" +
      "####.##.##\n" +
      "#.##.##.##\n" +
      "#.#####.##\n" +
      "..#.#.....\n" +
      "##########\n" +
      "#.######.#\n" +
      "#.#####.##"
    ).split("\n");

    expect(grid.gridData).toEqual(grid.convertToGridData(expected));
  });

  test("numberOfAdjacentOccupiedSeats", () => {
    const grid = new SeatGrid(mainDemo);
    const occupiedAdjacentSeats = grid.getNumberOfOccupiedAdjacentSeats(0, 0);
    expect(occupiedAdjacentSeats).toBe(0);
  });

  test("numberOfAdjacentOccupiedSeats 2", () => {
    const demo2 = (
      "#.##.##.##\n" +
      "#######.##\n" +
      "#.#.#..#..\n" +
      "####.##.##\n" +
      "#.##.##.##\n" +
      "#.#####.##\n" +
      "..#.#.....\n" +
      "##########\n" +
      "#.######.#\n" +
      "#.#####.##"
    ).split("\n");

    const grid = new SeatGrid(demo2);
    const occupiedAdjacentSeats = grid.getNumberOfOccupiedAdjacentSeats(0, 0);
    expect(occupiedAdjacentSeats).toBe(2);
  });

  test("shouldflip to #", () => {
    const input = mainDemo;
    const grid = new SeatGrid(input);
    const occupiedAdjacentSeats = grid.getNumberOfOccupiedAdjacentSeats(0, 3);
    expect(occupiedAdjacentSeats).toBe(0);
    expect(grid.getNewStateForPosition(0, 3)).toBe("#");
  });
});
