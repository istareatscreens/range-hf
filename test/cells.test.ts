import { cells } from "../src/index";
import { decimalTobb26 } from "bb26-spreadsheet/lib";

// check if every element of array2 is element of array1
describe("rangeSpread", () => {
  test("Should output proper cell values", () => {
    expect(cells()).toEqual("A1:XFD1048576");
    expect(cells(3)).toEqual("C1");
    expect(cells("3")).toEqual("C1");
    expect(cells(4)).toEqual(decimalTobb26(4) + 1);
    expect(cells("D")).toEqual("D" + 1);
    expect(cells(5)).toEqual(decimalTobb26(5) + 1);
    expect(cells(31)).toEqual(decimalTobb26(31) + 1);
    expect(cells(31)).toEqual(decimalTobb26(31) + 1);
    expect(cells(1000)).toEqual(decimalTobb26(1000) + 1);
    expect(cells(3, 15)).toEqual(decimalTobb26(15) + 3);
    expect(cells("3", "15")).toEqual(decimalTobb26(15) + 3);
    expect(cells("3", 15)).toEqual(decimalTobb26(15) + 3);
    expect(cells(15, 4)).toEqual("D15");
    expect(cells(100, 18)).toEqual(decimalTobb26(18) + 100);
    expect(cells(103, 2400)).toEqual(decimalTobb26(2400) + 103);
    expect(cells(10, "D")).toEqual("D" + 10);
    expect(cells(10, "XYZ")).toEqual("XYZ" + 10);
    expect(() => cells("A", "XYZ")).toThrow(TypeError);
    expect(() => cells(1, "0")).toThrow(TypeError);
    expect(() => cells("10", "AaV")).toThrow(TypeError);
  });
});
