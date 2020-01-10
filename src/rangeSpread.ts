import { bb26Range } from "bb26-spreadsheet";
/**
 * Takes in a range of cells in the form of a string and returns letters in an array
 * @param {string} address Spreadsheet range in range format i.e. "A1:B2"
 * @returns {string[]} string array containing cells associated with input cell i.e. ["A1", "A2", "B1", "B2"]
 */
export default function rangeSpread(address: string): string[] {
  //splits array into components Letter/Numbers
  let addressSplit: string[] = address.match(/[a-zA-Z]+|[0-9]+/g)!;
  //adds letter array to number array to produce all cells associated with range
  return alphanumericRecomposition(
    addressSplit[0] !== addressSplit[2]
      ? bb26Range(addressSplit[0], addressSplit[2])
      : [addressSplit[0]],
    range(Number(addressSplit[1]), Number(addressSplit[3]))
  );
}

/**
 * Determines if there are more letters than numbers or numbers than letters for recombination
 * @param {string[]} letArr
 * @param {number[]} numArr
 * @returns {string[]}
 */
function alphanumericRecomposition(
  letArr: string[] | number[],
  numArr: string[] | number[]
) {
  if (letArr.length > numArr.length) {
    return getalphaNumbericRecomposition(numArr, letArr, false);
  } else {
    return getalphaNumbericRecomposition(letArr, numArr, true);
  }
}

/**
 * Recombines letters and strings to form cell addresses
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @param {boolean} swap
 * @returns {string[]}
 */
function getalphaNumbericRecomposition(
  arr1: number[] | string[],
  arr2: number[] | string[],
  swap: boolean
): string[] {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    temp.push(
      (arr2 as Array<number | string>).map(element =>
        swap ? "" + arr1[i] + element : "" + element + arr1[i]
      )
    );
  }
  return temp.flat(Infinity);
}

/**
 * returns array of numbers from start to end inclusive
 * @param {number} start first number
 * @param {number} end last number
 */
function range(start: number, end: number = 0): number[] {
  let total: number[] = [];
  if (!end) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end + 1; i += 1) {
    total.push(i);
  }
  return total;
}
