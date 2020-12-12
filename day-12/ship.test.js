const { Ship } = require("./ship");
describe("ship", () => {
  test("moves North", () => {
    const s = new Ship();
    s.move("N10");
    expect(s.currentPosition).toEqual({ north: 10, east: 0 });
  });

  test("moves South", () => {
    const s = new Ship();
    s.move("S10");
    expect(s.currentPosition).toEqual({ north: -10, east: 0 });
  });

  test("moves East", () => {
    const s = new Ship();
    s.move("E10");
    expect(s.currentPosition).toEqual({ north: 0, east: 10 });
  });

  test("moves West", () => {
    const s = new Ship();
    s.move("W10");
    expect(s.currentPosition).toEqual({ north: 0, east: -10 });
  });

  test("facting", () => {
    const s = new Ship();
    expect(s.facing).toBe("EAST");
  });
  test("rotates L 0", () => {
    const s = new Ship();
    s.move("L0");
    expect(s.facing).toEqual("EAST");
  });
  test("rotates L 90", () => {
    const s = new Ship();
    s.move("L90");
    expect(s.facing).toEqual("NORTH");
    s.move("L90");
    expect(s.facing).toEqual("WEST");
    s.move("L90");
    expect(s.facing).toEqual("SOUTH");
    s.move("L90");
    expect(s.facing).toEqual("EAST");
    s.move("L90");
    expect(s.facing).toEqual("NORTH");
  });
  test("rotates L 180", () => {
    const s = new Ship();
    s.move("L180");
    expect(s.facing).toEqual("WEST");
    s.move("L180");
    expect(s.facing).toEqual("EAST");

    s.facingIndex = 3;
    s.move("L180");
    expect(s.facing).toEqual("SOUTH");
    s.move("L180");
    expect(s.facing).toEqual("NORTH");
  });

  test("rotates L 270", () => {
    const s = new Ship();
    s.move("L270");
    expect(s.facing).toEqual("SOUTH");
    s.move("L270");
    expect(s.facing).toEqual("WEST");
    s.move("L270");
    expect(s.facing).toEqual("NORTH");
    s.move("L270");
    expect(s.facing).toEqual("EAST");
  });

  test("rotates R 90", () => {
    const s = new Ship();
    s.move("R90");
    expect(s.facing).toEqual("SOUTH");
    s.move("R90");
    expect(s.facing).toEqual("WEST");
    s.move("R90");
    expect(s.facing).toEqual("NORTH");
    s.move("R90");
    expect(s.facing).toEqual("EAST");
    s.move("R90");
    expect(s.facing).toEqual("SOUTH");
  });

  test("rotates R 180", () => {
    const s = new Ship();
    s.move("R180");
    expect(s.facing).toEqual("WEST");
    s.move("R180");
    expect(s.facing).toEqual("EAST");
    s.move("R180");
    expect(s.facing).toEqual("WEST");
    s.move("R180");
    expect(s.facing).toEqual("EAST");

    s.facingIndex = 1;
    s.move("R180");
    expect(s.facing).toEqual("NORTH");
    s.move("R180");
    expect(s.facing).toEqual("SOUTH");
    s.move("R180");
    expect(s.facing).toEqual("NORTH");
    s.move("R180");
    expect(s.facing).toEqual("SOUTH");
  });

  test("rotates R 270", () => {
    const s = new Ship();
    s.move("R270");
    expect(s.facing).toEqual("NORTH");
    s.move("R270");
    expect(s.facing).toEqual("WEST");
    s.move("R270");
    expect(s.facing).toEqual("SOUTH");
    s.move("R270");
    expect(s.facing).toEqual("EAST");
  });

  test("move F", () => {
    const s = new Ship();
    s.move("F10");
    expect(s.currentPosition).toEqual({ north: 0, east: 10 });

    s.facingIndex = 3;
    s.move("F10");
    expect(s.currentPosition).toEqual({ north: 10, east: 10 });

    s.facingIndex = 2;
    s.move("F10");
    expect(s.currentPosition).toEqual({ north: 10, east: 0 });

    s.facingIndex = 1;
    s.move("F10");
    expect(s.currentPosition).toEqual({ north: 0, east: 0 });
  });
});
