const day = require("./day-18.js");
const { Calculator } = require("./calculator");

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
  test("solve Plus first 1", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst("1 + 2 * 3 + 4 * 5 + 6");
    expect(eq).toBe(231);
  });
  test("solve Plus first 2", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst("1 + (2 * 3) + (4 * (5 + 6))");
    expect(eq).toBe(51);
  });
  test("solve Plus first 3", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst("2 * 3 + (4 * 5)");
    expect(eq).toBe(46);
  });
  test("solve Plus first 4", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst("5 + (8 * 3 + 9 + 3 * 4 * 3)");
    expect(eq).toBe(1445);
  });
  test("solve Plus first 5", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))");
    expect(eq).toBe(669060);
  });
  test("solve Plus first 6", () => {
    const c = new Calculator();
    const eq = c.solvePlusFirst(
      "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"
    );
    expect(eq).toBe(23340);
  });
});
