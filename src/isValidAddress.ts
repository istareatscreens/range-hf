import { splitLetterNumbers } from "./splitRange";
import { isValidbb26 } from "bb26-spreadsheet/lib";

export default function isValidAddress(
  address: string,
  suppressError = false
): boolean {
  return isValidSplitAddress(splitLetterNumbers(address), suppressError);
}

export function isValidSplitAddress(
  splitAddress: string[] | number[],
  suppressError = false
): boolean {
  try {
    switch (splitAddress.length) {
      case 4:
        isValidColumnAndRow(<string>splitAddress[2], splitAddress[3]);
      // eslint-disable-next-line no-fallthrough
      case 2:
        isValidColumnAndRow(<string>splitAddress[0], splitAddress[1]);
        return true;
      default:
        if (suppressError) return false;
        throw new TypeError("invalid input of " + splitAddress.join(""));
    }
  } catch (error) {
    if (suppressError) return false;
    throw error;
  }
}

export function isValidColumnAndRow(
  column: string,
  row: string | number
): boolean {
  return isValidbb26(column) && typeof rowCheck(row) == "number";
}

export function rowCheck(row: string | number): number {
  if (typeof row == "string") row = <number>parseInt(<string>row);
  if (row > 0 && !isNaN(row)) return <number>row;
  else throw new TypeError("Invalid row entry of " + row);
}
