import { isInRange } from "../src/index";

describe("delimRangeSpread", () => {
  //true tests
  test("Should work with range", () => {
    expect(isInRange("A1", "A1:B2")).toBeTruthy();
  });
  test("Should work with range", () => {
    expect(isInRange("B2", "A1:B2")).toBeTruthy();
  });
  test("Should work with range", () => {
    expect(isInRange("B2", "A1:C2")).toBeTruthy();
  });
  test("Should work with range", () => {
    expect(isInRange("AZY11", "AZY10:AZZ12")).toBeTruthy();
  });
  test("Should work with range", () => {
    expect(isInRange("Z11", "Z2:AA12")).toBeTruthy();
  });
  test("Should work with range", () => {
    expect(isInRange("Z11", "Z50:AA2")).toBeTruthy();
  });
  //false tests
  test("Should work with range", () => {
    expect(isInRange("A1", "A10:A12")).toBeFalsy();
  });

  test("Should work with range", () => {
    expect(isInRange("AA11", "AAA10:AAA12")).toBeFalsy();
  });

  test("Should work with range", () => {
    expect(isInRange("BA11", "AB12:AC8")).toBeFalsy();
  });

  test("Should work with range", () => {
    expect(isInRange("BA11", "AB10:AC12")).toBeFalsy();
  });

  test("Should work with range", () => {
    expect(isInRange("BA11", "AB10:AC12")).toBeFalsy();
  });
});
