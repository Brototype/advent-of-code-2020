const { Tile } = require("./tile");
describe("tile", () => {
  test("init tile", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "K", "L"],
      ["M", "N", "O", "P"],
    ];
    //tile.print();
    expect(tile.id).toBe(2311);
    expect(tile.matrix).toEqual(matrix);
    expect(tile.orientation).toEqual(0);
    expect(tile.flippedVertically).toEqual(false);
    expect(tile.flippedHorizontally).toEqual(false);
  });

  test("rotate", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["M", "I", "E", "A"],
      ["N", "J", "F", "B"],
      ["O", "K", "G", "C"],
      ["P", "L", "H", "D"],
    ];
    tile.rotate90();
    //tile.print();
    expect(tile.matrix).toEqual(matrix);
    expect(tile.orientation).toEqual(90);
  });

  test("rotate 4 times", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "K", "L"],
      ["M", "N", "O", "P"],
    ];
    tile.rotate90();
    tile.rotate90();
    tile.rotate90();
    tile.rotate90();
    //tile.print();
    expect(tile.matrix).toEqual(matrix);
    expect(tile.orientation).toEqual(0);
  });

  test("flip tile vertically", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["M", "N", "O", "P"],
      ["I", "J", "K", "L"],
      ["E", "F", "G", "H"],
      ["A", "B", "C", "D"],
    ];
    tile.flipVertically();
    tile.print();
    expect(tile.matrix).toEqual(matrix);
    expect(tile.flippedVertically).toEqual(true);
  });

  test("flip tile horizontally", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["D", "C", "B", "A"],
      ["H", "G", "F", "E"],
      ["L", "K", "J", "I"],
      ["P", "O", "N", "M"],
    ];
    tile.flipHorizontally();
    tile.print();
    expect(tile.matrix).toEqual(matrix);
    expect(tile.flippedHorizontally).toEqual(true);
  });

  test("transition to nex tposition", () => {
    const input = ["Tile 2311:", "ABCD", "EFGH", "IJKL", "MNOP"].join("\n");
    const tile = new Tile(input);
    const matrix = [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "K", "L"],
      ["M", "N", "O", "P"],
    ];
    //tile.print();
    expect(tile.matrix).toEqual(matrix);
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(0);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(1);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(2);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(3);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(4);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(5);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(true);
    expect(tile.position).toBe(6);

    tile.transitionToNextPosition();
    tile.print();
    expect(tile.hasNextPosition()).toBe(false);
    expect(tile.position).toBe(7);

    // back in initial state
    tile.transitionToNextPosition();
    expect(tile.position).toBe(0);
    expect(tile.matrix).toEqual(matrix);
  });
});
