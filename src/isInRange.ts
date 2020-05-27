import { bb26Compare } from "bb26-spreadsheet";
import { splitLetterNumbers } from "./utilityFunctions";

type SPLITADDRESS = (string | number)[];

/**
 * Checks to see if a cell exists in a range
 * @param cell {string} cell address i.e. "A1"
 * @param range {string} range address i.e. "A1:A2"
 * @returns {boolean} true or false
 * @example isInRange("A2", "A1:B10") //returns true
 */
export default function isInRange(cell: string, range: string): boolean {
  const splitCell: SPLITADDRESS = splitLetterNumbers(cell);
  const splitRange: SPLITADDRESS = splitLetterNumbers(range);
  const bb26comparison: number[] = [
    bb26Compare(<string>splitCell[0], <string>splitRange[0]),
    bb26Compare(<string>splitCell[0], <string>splitRange[2]),
  ];

  return (
    //Check Letters
    !(
      (bb26comparison[0] === 2 && bb26comparison[1] === 2) ||
      (bb26comparison[0] === 1 && bb26comparison[1] === 1)
    ) &&
    //Check Numbers
    ((Number(splitCell[1]) >= splitRange[1] &&
      Number(splitCell[1]) <= splitRange[3]) ||
      (Number(splitCell[1]) >= splitRange[3] &&
        Number(splitCell[1]) <= splitRange[1]))
  );
}
