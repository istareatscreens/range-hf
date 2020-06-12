import { randomCell, isInRange } from "../src/index";

describe("delimRangeSpread", () => {
  for (let i = 0; i < 100; i++) {
    //true tests
    test("Should work with range", () => {
      expect(isInRange(randomCell("F44:ZZ22"), "F44:ZZ22")).toBeTruthy();
    });
    test("Should work with range", () => {
      expect(isInRange(randomCell("A1:A55"), "A1:A55")).toBeTruthy();
    });
    test("Should work with range", () => {
      expect(isInRange(randomCell("B1:B101"), "B1:B101")).toBeTruthy();
    });
    test("Should work with range", () => {
      expect(isInRange(randomCell("AZY10:AZZ12"), "AZY10:AZZ12")).toBeTruthy();
    });
    test("Should work with range", () => {
      expect(isInRange(randomCell("Z2:AA12"), "Z2:AA12")).toBeTruthy();
    });
    test("Should work with range", () => {
      expect(isInRange(randomCell("Z50:AA2"), "Z50:AA2")).toBeTruthy();
    });
    //false tests
    test("Should work with range", () => {
      expect(isInRange(randomCell("A1:A9"), "A10:A12")).toBeFalsy();
    });

    test("Should work with range", () => {
      expect(isInRange(randomCell("A1:A1"), "A3:A2")).toBeFalsy();
    });

    test("Should work with range", () => {
      expect(isInRange(randomCell("Z1:AA55"), "AB10:AC12")).toBeFalsy();
    });
  }
});
