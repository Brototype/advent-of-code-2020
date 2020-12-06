const day = require("./day-4.js");

describe("day-4", () => {
  const data = (
    "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n" +
    "byr:1937 iyr:2017 cid:147 hgt:183cm\n" +
    "\n" +
    "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n" +
    "hcl:#cfa07d byr:1929\n" +
    "\n" +
    "hcl:#ae17e1 iyr:2013\n" +
    "eyr:2024\n" +
    "ecl:brn pid:760753108 byr:1931\n" +
    "hgt:179cm\n" +
    "\n" +
    "hcl:#cfa07d eyr:2025 pid:166559648\n" +
    "iyr:2011 ecl:brn hgt:59in"
  ).split("\n");

  describe("part one", () => {
    test("works", () => {
      expect(day.part1(data)).toBe(2);
    });
  });

  describe("part two", () => {
    test("works", () => {
      expect(day.part2(data)).toBe(2);
    });
  });
});
