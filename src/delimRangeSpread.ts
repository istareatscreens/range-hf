import rangeSpread from "./rangeSpread";

/**
 * returns all cells associated with a delimited string in spreadsheet notation
 * @param {string} address delimited string containing cell and range addresses i.e "A1, A1:AC33"
 * @param {string} delimiter "custom delimiter, defaults to delimiter = ","
 * @return {string[] | string}
 */
export default function delimRangeSpread(
  address: string,
  delimiter: string = ","
): string[] {
  //remove whitespace
  address = address.replace(/\s/g, "");
  //check conditions
  if (address.includes(":") && address.includes(delimiter)) {
    return returnIndividualCells(delineateAddress(address, delimiter));
    //address includes delimination and range address format
  } else if (address.includes(":")) {
    return returnIndividualCells(address);
    //address includes just range
  } else if (address.includes(delimiter)) {
    return delineateAddress(address, delimiter);
    //address includes just delimiation
  } else {
    //single cell address
    return [address];
  }
}

//returns array of all cells, if array contains just a cell returns cell
function returnIndividualCells(address: string | string[]) {
  if (Array.isArray(address)) {
    return address.flatMap(range =>
      !range.includes(":") ? range : rangeSpread(range)
    );
  } else {
    return rangeSpread(address);
  }
}

/**
 * deliminates string
 * @param {string} address
 * @param {string} delimiter
 * @returns {string[]}
 */
function delineateAddress(address: string, delimiter: string) {
  let pattern = new RegExp("\\" + delimiter + "\\s*");
  return address.split(pattern);
}
