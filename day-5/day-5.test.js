const day05 = require("./day-5");

describe("day05", () => {
  describe("part one", () => {
    describe("helpers", () => {
      test("getSeatId", () => {
        expect(day05.getSeatId("FBFBBFFRLR")).toBe(357);
        expect(day05.getSeatId("BFFFBBFRRR")).toBe(567);
        expect(day05.getSeatId("FFFBBBFRRR")).toBe(119);
        expect(day05.getSeatId("BBFFBBFRLL")).toBe(820);
      });

      test("getRow", () => {
        expect(day05.getRow("FBFBBFFRLR")).toBe(44);
        expect(day05.getRow("BFFFBBFRRR")).toBe(70);
        expect(day05.getRow("FFFBBBFRRR")).toBe(14);
        expect(day05.getRow("BBFFBBFRLL")).toBe(102);
      });

      test("getCol", () => {
        expect(day05.getCol("FBFBBFFRLR")).toBe(5);
        expect(day05.getCol("BFFFBBFRRR")).toBe(7);
        expect(day05.getCol("FFFBBBFRRR")).toBe(7);
        expect(day05.getCol("BBFFBBFRLL")).toBe(4);
      });

      test("getNewMinAndNewMaxRowOrCol R", () => {
        expect(day05.getNewMinAndNewMaxRowOrCol("R", 0, 7)).toEqual({
          min: 4,
          max: 7,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("R", 4, 5)).toEqual({
          min: 5,
          max: 5,
        });
      });

      test("getNewMinAndNewMaxRowOrCol L", () => {
        expect(day05.getNewMinAndNewMaxRowOrCol("L", 4, 7)).toEqual({
          min: 4,
          max: 5,
        });
      });

      test("getNewMinAndNewMaxRowOrCol F", () => {
        expect(day05.getNewMinAndNewMaxRowOrCol("F", 0, 127)).toEqual({
          min: 0,
          max: 63,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("F", 32, 63)).toEqual({
          min: 32,
          max: 47,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("F", 44, 47)).toEqual({
          min: 44,
          max: 45,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("F", 44, 45)).toEqual({
          min: 44,
          max: 44,
        });
      });

      test("getNewMinAndNewMaxRowOrCol B", () => {
        expect(day05.getNewMinAndNewMaxRowOrCol("B", 0, 63)).toEqual({
          min: 32,
          max: 63,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("B", 32, 47)).toEqual({
          min: 40,
          max: 47,
        });
        expect(day05.getNewMinAndNewMaxRowOrCol("B", 40, 47)).toEqual({
          min: 44,
          max: 47,
        });
      });
    });
  });
});
