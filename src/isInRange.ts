import { bb26ToDecimal } from "bb26-spreadsheet";

/**
 * Checks to see if a Cell exists in a range
 * @param cell {string} cell address i.e. "A1"
 * @param range {string} range address i.e. "A1:A2"
 * @returns {boolean} true or false
 * @example isInRange("A2", "A1:B10") //returns true
 */
export default function isInRange(cell: string, range: string): boolean {
  let splitCell: string[] = splitLetterNumbers(cell);
  let splitRange: string[] = splitLetterNumbers(range);

  return (
    compare(bb26ToDecimal(splitCell[0]), [
      bb26ToDecimal(splitRange[0]),
      bb26ToDecimal(splitRange[2])
    ]) &&
    compare(Number(splitCell[1]), [
      Number(splitRange[1]),
      Number(splitRange[3])
    ])
  );
}

/**
 * Takes in a number and determines if it exists in a range
 * @param index {number} lookup number
 * @param range {number[]} lookup numbers in range
 * @returns {boolean} true/false
 */
function compare(index: number, range: number[]): boolean {
  if (index >= range[0] && index <= range[1] && range[1] >= range[0]) {
    return true;
  } else if (index >= range[1] && index <= range[0] && range[0] >= range[1]) {
    return true;
  } else {
    return false;
  }
}

function splitLetterNumbers(address: string): string[] {
  return address.match(/[a-zA-Z]+|[0-9]+/g)!;
}
