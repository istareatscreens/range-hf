import { decimalTobb26, isValidbb26 } from "bb26-spreadsheet";

/**
 * Returns a string corrosponding to a cell value given a row number, and column number or if
 * or if no parameters are given the full range of excel
 * meant to be analogus to to vba Cells function
 * @param row {string} specifies row, unless single argument is given then specifies column and row is 1, column number > 0
 * @param column {number | string} specifies column number starts, column number > 0
 * @returns {string}  returns string specifying cell or if no parmeters are given full excel range
 * @example cells(3) // returns "C1", cells(15,4) //returns "D15"
 */
export default function cells(
  row: number | string = -1,
  column: number | string = -1
): string {
  if (column == -1 && row == -1) {
    return "A1:XFD1048576";
  } else if (column == -1) {
    column = row;
    row = 1;
  }

  return (
    (typeof column == "number"
      ? decimalTobb26(<number>column)
      : isValidbb26(<string>column, true)
      ? column
      : decimalTobb26(parseInt(column))) + rowCheck(row)
  );
}

function rowCheck(row: string | number): number {
  if (typeof row == "string") row = <number>parseInt(<string>row);
  if (row > 0 && !isNaN(row)) return <number>row;
  else throw new TypeError("Invalid row entry of " + row);
}
