import { bb26Random } from "bb26-spreadsheet";
import { splitLetterNumbers } from "./utilityFunctions";

/**
 * Generates a random cell from given range inclusively
 * @param range {string} range address i.e. "A1:A2"
 * @returns {string}  a random cell within the given range inclusive
 * @example isInRange("A1:B10") //returns B5
 */
export default function randomCell(range: string): string {
  const splitRange: string[] = splitLetterNumbers(range);
  return (
    bb26Random(splitRange[0], splitRange[2]) +
    (Math.ceil(
      Math.random() *
        (Number.parseInt(splitRange[1]) > Number.parseInt(splitRange[3])
          ? Number.parseInt(splitRange[1]) - Number.parseInt(splitRange[3])
          : Number.parseInt(splitRange[3]) - Number.parseInt(splitRange[1]))
    ) +
      (Number.parseInt(splitRange[1]) > Number.parseInt(splitRange[3])
        ? Number.parseInt(splitRange[3])
        : Number.parseInt(splitRange[1])))
  );
}
