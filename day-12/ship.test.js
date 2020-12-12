const { Ship } = require("./ship");
describe("ship part 1", () => {
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

describe("ship part 2", () => {
  test("waypoint moves with ship", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 1, east: 10 };
    s._moveShipEast(10);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
    s._moveShipSouth(5);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
    s._moveShipWest(30);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
    s._moveShipNorth(6);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
  });

  test("ship moves related to waypoint", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 1, east: 10 };
    s._moveForwardDependingOnWaypoint(10);
    expect(s.currentPosition).toEqual({ north: 10, east: 100 });
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
  });

  test("ship moves 7 times", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 4, east: 10 };
    s.currentPosition = { north: 10, east: 100 };
    s._moveForwardDependingOnWaypoint(7);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 4, east: 10 });
    expect(s.currentPosition).toEqual({ north: 38, east: 170 });
  });

  test("waypoint moves. ship remains", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 1, east: 10 };
    s._moveWaypointNorth(3);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 4, east: 10 });
    expect(s.currentPosition).toEqual({ north: 0, east: 0 });
  });

  test("F10 moves the ship to the waypoint 10 times ", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 1, east: 10 };
    s.currentPosition = { north: 0, east: 0 };
    s.move("F10", true);
    expect(s.currentPosition).toEqual({ north: 10, east: 100 });
    expect(s.relativePositionOfWaypoint).toEqual({ north: 1, east: 10 });
  });

  test("N3 moves the waypoint,not the ship", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 1, east: 10 };
    s.currentPosition = { north: 10, east: 100 };
    s.move("N3", true);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 4, east: 10 });
    expect(s.currentPosition).toEqual({ north: 10, east: 100 });
  });

  test("F7 moves the ship to the waypoint 7 times", () => {
    const s = new Ship();
    s.relativePositionOfWaypoint = { north: 4, east: 10 };
    s.currentPosition = { north: 10, east: 100 };
    s.move("F7", true);
    expect(s.relativePositionOfWaypoint).toEqual({ north: 4, east: 10 });
    expect(s.currentPosition).toEqual({ north: 38, east: 170 });
  });

  test("R90 rotates the waypoint around the ship clockwise 90 degrees", () => {
    const s = new Ship();
    s.currentPosition = { north: 38, east: 170 };
    s.relativePositionOfWaypoint = { north: 4, east: 10 };
    s.move("R90", true);

    expect(s.relativePositionOfWaypoint).toEqual({ north: -10, east: 4 });
    expect(s.currentPosition).toEqual({ north: 38, east: 170 });
  });

  test("F11 moves the ship to the waypoint 11 times", () => {
    const s = new Ship();
    s.currentPosition = { north: 38, east: 170 };
    s.relativePositionOfWaypoint = { north: -10, east: 4 };
    s.move("F11", true);
    expect(s.relativePositionOfWaypoint).toEqual({ north: -10, east: 4 });
    expect(s.currentPosition).toEqual({ north: -72, east: 214 });
  });
});
