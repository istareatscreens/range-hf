import { bb26Random } from "bb26-spreadsheet";
import { splitLetterNumbers } from "./utilityFunctions";

/**
 * Generates a random cell from given range inclusively
 * @param range {string} range address i.e. "A1:A2"
 * @returns {string}  a random cell within the given range inclusive
 * @example isInRange("A1:B10") //returns B5
 */
export default function randomCell(range: string): string {
  const splitRange: number[] | string[] = <string[] | number[]>(
    splitLetterNumbers(range)
  );
  splitRange[1] = Number.parseInt(<string>splitRange[1]);
  splitRange[3] = Number.parseInt(<string>splitRange[3]);

  return (
    bb26Random(<string>splitRange[0], <string>splitRange[2]) +
    (Math.ceil(
      Math.random() *
        (splitRange[1] > splitRange[3]
          ? splitRange[1] - splitRange[3]
          : splitRange[3] - splitRange[1])
    ) +
      (splitRange[1] > splitRange[3] ? splitRange[3] : splitRange[1]))
  );
}
