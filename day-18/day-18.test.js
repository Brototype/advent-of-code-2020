const day = require("./day-18.js");
const { Calculator } = require("./calculator");

describe("day-18", () => {
  describe("part one", () => {
    test("works with demo", () => {});
  });

  describe("part two", () => {
    test("works with demo", () => {});
  });
});

describe("calculator", () => {
  test("solve 1", () => {
    const c = new Calculator();
    const result = c.solve("1 + 2 * 3 + 4 * 5 + 6");
    expect(result).toBe(71);
  });
  test("solve 2", () => {
    const c = new Calculator();
    const result = c.solve("1 + (2 * 3) + (4 * (5 + 6))");
    expect(result).toBe(51);
  });
  test("solve 3", () => {
    const c = new Calculator();
    const result = c.solve("2 * 3 + (4 * 5)");
    expect(result).toBe(26);
  });
  test("solve 4", () => {
    const c = new Calculator();
    const result = c.solve("5 + (8 * 3 + 9 + 3 * 4 * 3)");
    expect(result).toBe(437);
  });
  test("solve 5", () => {
    const c = new Calculator();
    const result = c.solve("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))");
    expect(result).toBe(12240);
  });
  test("solve 6", () => {
    const c = new Calculator();
    const result = c.solve("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2");
    expect(result).toBe(13632);
  });
});
