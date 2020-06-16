import { isValidAddress } from "../src/index";

// check if isValidAddress is checking addresses properly
describe("rangeSpread", () => {
  test("Should output proper cell values", () => {
    expect(isValidAddress("A3")).toEqual(true);
    expect(isValidAddress("A5:B33")).toEqual(true);
    expect(isValidAddress("AA44:A1")).toEqual(true);
    expect(isValidAddress("BRO33:XLJ100")).toEqual(true);
    expect(isValidAddress("ZZ55")).toEqual(true);
    expect(isValidAddress("ZZ55")).toEqual(true);
    expect(isValidAddress("ll55", true)).toEqual(false);
    expect(isValidAddress("LL44:ll3", true)).toEqual(false);
    expect(isValidAddress("ii", true)).toEqual(false);
    expect(isValidAddress("I0", true)).toEqual(false);
    expect(isValidAddress("3a33", true)).toEqual(false);
    expect(isValidAddress("ED3JK2", true)).toEqual(true);
    expect(isValidAddress("ED3A3JK2", true)).toEqual(false);
    expect(isValidAddress("3EEJK2", true)).toEqual(false);
    expect(isValidAddress("ABB-1:A0", true)).toEqual(false);
    expect(isValidAddress("ABB2:A0", true)).toEqual(false);
    expect(isValidAddress("-1:A0", true)).toEqual(false);
    expect(() => isValidAddress("Sb3:A1", false)).toThrow(TypeError);
    expect(() => isValidAddress("3BB:A1")).toThrow(TypeError);
    expect(() => isValidAddress("3BB:A1F3F", false)).toThrow(TypeError);
    expect(() => isValidAddress("ABB-1:A0", false)).toThrow(TypeError);
    expect(() => isValidAddress("ABB-1:A0")).toThrow(TypeError);
    expect(() => isValidAddress("BB:A1")).toThrow(TypeError);
    expect(() => isValidAddress("Sb3")).toThrow(TypeError);
    expect(() => isValidAddress("33")).toThrow(TypeError);
    expect(() => isValidAddress("Sb3:A1")).toThrow(TypeError);
  });
});
