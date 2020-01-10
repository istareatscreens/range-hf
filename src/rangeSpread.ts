import { bb26Range } from "bb26-spreadsheet";

/**
 * @param {string} address
 * @return {string[] | string}
 */
function rangeToCellArray(address: string, delimiter: string = ","): string[] {
  //remove whitespace
  address.replace(/\s/g, "");
  //check conditions
  if (address.includes(":") && address.includes(delimiter)) {
    return returnIndividualCells(delineateAddress(address));
    //address includes delimination and range address format
  } else if (address.includes(":")) {
    return returnIndividualCells(address);
    //address includes just range
  } else if (address.includes(delimiter)) {
    return delineateAddress(address);
    //address includes just delimiation
  } else {
    //single cell address
    return [address];
  }
}

/**
 * @param {string} address
 */
export default function rangeSpread(
  address: string,
  delimiter: string = ","
): string[] {
  //splits array into components Letter/Numbers
  let addressSplit: string[] = address.match(/[a-zA-Z]+|[0-9]+/g)!;
  //adds letter array to number array to produce all cells associated with range
  return alphanumericRecomposition(
    addressSplit[0] !== addressSplit[2]
      ? appendEnd(
          bb26Range(addressSplit[0], addressSplit[2]),
          addressSplit[2]
        ) /*append column letter*/
      : [addressSplit[0]] /*return single letter*/,
    range(Number(addressSplit[1]), Number(addressSplit[3]))
  );
}

/**
 * @param {string} address
 * @returns {string[]}
 */
function delineateAddress(address: string) {
  //removes comma
  return address.split(/[ ,]+/);
}

function returnIndividualCells(address: string | any[]) {
  if (Array.isArray(address)) {
    //returns array of all cells, if array contains just a cell returns cell
    return address.flatMap(range =>
      !range.includes(":") ? range : rangeSpread(range)
    );
  } else {
    return rangeSpread(address);
  }
}

/**
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
 *
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
