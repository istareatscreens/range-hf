//splits range and cells into arrays of letters and numbers
export function splitLetterNumbers(address: string): string[] {
  return address.match(/[a-zA-Z]+|[0-9]+/g)!;
}
