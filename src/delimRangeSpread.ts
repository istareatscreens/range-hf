import rangeSpread from "./rangeSpread";

/**
 * returns all cells in an array of strings associated with a delimited string in spreadsheet notation
 * @param {string} address delimited string containing cell and range addresses i.e "A1, A1:AC33"
 * @param {string} delimiter "custom delimiter, defaults to delimiter = ","
 * @return {string[] | string} returns an array of cells
 * @example delimRangeSpread("A1, B2:C3"); // returns ["A1", "B2", "B3" "C2", "C3"]
 * @example delimRangeSpread("A1:B2|A2:B2", "|"); //returns ["A1", "B1", "B2", "A2"]
 */
export default function delimRangeSpread(
  address: string,
  delimiter: string = ","
): string[] {
  //remove whitespace
  address = address.replace(/\s/g, "");
  //check conditions
  if (address.includes(":") && address.includes(delimiter)) {
    return <string[]>(
      returnIndividualCells(delineateAddress(address, delimiter))
    );
    //address includes delimination and range address format
  } else if (address.includes(":")) {
    return <string[]>returnIndividualCells(address);
    //address includes just range
  } else if (address.includes(delimiter)) {
    return delineateAddress(address, delimiter);
    //address includes just delimiation
  }

  //single cell address
  return [address];
}
/**
 * returns array of all cells, if array contains just a cell returns cell
 * @param address {string | string[]} takes in a string i.e. "A2" or ["A1:A2"]
 * @returns {string|string[]} returns array of cells i.e. ["A1", "A2"]
 */

function returnIndividualCells(address: string | string[]): string | string[] {
  if (Array.isArray(address)) {
    return address.flatMap((range) =>
      !range.includes(":") ? range : rangeSpread(range)
    );
  }
  return rangeSpread(address);
}

/**
 * deliminates string
 * @param {string} address takes in deliminated address
 * @param {string} delimiter custom deliminator defaults to ","
 * @returns {string[]} returns array of cells
 */
function delineateAddress(address: string, delimiter: string) {
  return address.split(new RegExp("\\" + delimiter + "\\s*"));
}
