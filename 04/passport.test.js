const { Passport } = require("./passport");

describe("validation functions", () => {
  test("byr", () => {
    const p = new Passport();
    p.passportData.byr = "2002";
    expect(p.isByrValid()).toBe(true);
    p.passportData.byr = "2003";
    expect(p.isByrValid()).toBe(false);
  });

  test("hgt", () => {
    const p = new Passport();
    p.passportData.hgt = "60in";
    expect(p.isHgtValid()).toBe(true);
    p.passportData.hgt = "190cm";
    expect(p.isHgtValid()).toBe(true);
    p.passportData.hgt = "190in";
    expect(p.isHgtValid()).toBe(false);
    p.passportData.hgt = "190";
    expect(p.isHgtValid()).toBe(false);
  });
  test("hcl", () => {
    const p = new Passport();
    p.passportData.hcl = "#123abc";
    expect(p.isHclValid()).toBe(true);
    p.passportData.hcl = "#123abz";
    expect(p.isHclValid()).toBe(false);
    p.passportData.hcl = "123abc";
    expect(p.isHclValid()).toBe(false);
  });
  test("ecl", () => {
    const p = new Passport();
    p.passportData.ecl = "brn";
    expect(p.isEclValid()).toBe(true);

    p.passportData.ecl = "wat";
    expect(p.isEclValid()).toBe(false);
  });
  test("pid", () => {
    const p = new Passport();
    p.passportData.pid = "000000001";
    expect(p.isPidValid()).toBe(true);
    p.passportData.pid = "0123456789";
    expect(p.isPidValid()).toBe(false);
  });
});
