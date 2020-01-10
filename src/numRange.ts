/**
 * @param {number} start
 * @param {number} end
 */
export default function range(start: number, end: number = 0): number[] {
  let total: number[] = [];
  if (!end) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end + 1; i += 1) {
    total.push(i);
  }
  return total;
}
