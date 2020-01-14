import { delimRangeSpread } from "../src/index";

// check if every element of array2 is element of array1
describe("delimRangeSpread", () => {
  test("Should work with range", () => {
    expect(new Set(delimRangeSpread("A1:B2"))).toEqual(
      new Set(["A1", "B1", "A2", "B2"])
    );
    expect(new Set(delimRangeSpread("Z1:AA2"))).toEqual(
      new Set(["Z1", "AA1", "Z2", "AA2"])
    );
    expect(new Set(delimRangeSpread("A9:B10"))).toEqual(
      new Set(["A9", "B9", "A10", "B10"])
    );

    expect(new Set(delimRangeSpread("A5"))).toEqual(new Set(["A5"]));

    expect(new Set(delimRangeSpread("A1:B10"))).toEqual(
      new Set([
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "B8",
        "B9",
        "B10"
      ])
    );

    expect(new Set(delimRangeSpread("ABC9:ACC10"))).toEqual(
      new Set([
        "ABC9",
        "ABD9",
        "ABE9",
        "ABF9",
        "ABG9",
        "ABH9",
        "ABI9",
        "ABJ9",
        "ABK9",
        "ABL9",
        "ABM9",
        "ABN9",
        "ABO9",
        "ABP9",
        "ABQ9",
        "ABR9",
        "ABS9",
        "ABT9",
        "ABU9",
        "ABV9",
        "ABW9",
        "ABX9",
        "ABY9",
        "ABZ9",
        "ACA9",
        "ACB9",
        "ACC9",
        "ABC10",
        "ABD10",
        "ABE10",
        "ABF10",
        "ABG10",
        "ABH10",
        "ABI10",
        "ABJ10",
        "ABK10",
        "ABL10",
        "ABM10",
        "ABN10",
        "ABO10",
        "ABP10",
        "ABQ10",
        "ABR10",
        "ABS10",
        "ABT10",
        "ABU10",
        "ABV10",
        "ABW10",
        "ABX10",
        "ABY10",
        "ABZ10",
        "ACA10",
        "ACB10",
        "ACC10"
      ])
    );
    expect(new Set(delimRangeSpread("B12:B13,C12:D13"))).toEqual(
      new Set(["B12", "B13", "C12", "C13", "D12", "D13"])
    );

    //testing white space
    expect(new Set(delimRangeSpread(" B12:B13, C12:D13"))).toEqual(
      new Set(["B12", "B13", "C12", "C13", "D12", "D13"])
    );
    expect(new Set(delimRangeSpread("B12:B13, C 12:D13 "))).toEqual(
      new Set(["B12", "B13", "C12", "C13", "D12", "D13"])
    );

    expect(new Set(delimRangeSpread("A1, B12:B13, C12:D13 "))).toEqual(
      new Set(["A1", "B12", "B13", "C12", "C13", "D12", "D13"])
    );

    expect(new Set(delimRangeSpread("B12:B13,C2, C2, C1:C2 "))).toEqual(
      new Set(["B12", "B13", "C2", "C1"])
    );
    expect(new Set(delimRangeSpread("C1, C2, C3, B5"))).toEqual(
      new Set(["C1", "C2", "C3", "B5"])
    );
    expect(new Set(delimRangeSpread("C1"))).toEqual(new Set(["C1"]));
    expect(new Set(delimRangeSpread("C1:C3"))).toEqual(
      new Set(["C1", "C2", "C3"])
    );
    expect(new Set(delimRangeSpread("C1:C3|C4|B5", "|"))).toEqual(
      new Set(["C1", "C2", "C3", "C4", "B5"])
    );
  });
});
