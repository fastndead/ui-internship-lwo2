/**
 * @description
 * Sums two arguments together. If only one argument is provided - returns
 * a function that expects one argument and returns the sum.
 * @example
 * // returns 5
 * addTogether(2, 3)
 * @param {Number} a - number to sum
 * @param {Number} b - number to sum
 * @return {(Number|Function)}
 */
export function addTogether(a, b) {
  if (typeof a !== 'number') {
    return;
  }
  if (b === undefined) {
    return (b) => {
      if (typeof b !== 'number') {
        return;
      }
      return a + b;
    };
  }
  if (typeof b !== 'number') {
    return;
  }
  return a + b;
}
