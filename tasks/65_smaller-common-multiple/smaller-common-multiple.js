/**
 * Find the smallest common multiple of the provided parameters
 * @example
 * //returns 60
 * smallestCommons([1, 5])
 * Parameters include range of numbers
 * @param {Number} a - start of the range
 * @param {Number} b - end of the range
 * @return {number} - smallest common multiple
 */
export function smallestCommons([a, b]) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let multiple = min;
  const numbers = range(min, max);
  for (let i = 0; i < numbers.length; i++) {
    multiple = (multiple * numbers[i]) /
      greatestCommonDivisor(multiple, numbers[i]);
  }
  return multiple;
}

/**
 * Finds all whole numbers in the given range
 * @example
 * // returns [1, 2, 3]
 * range(1, 3)
 * @param {Number} min - start of the range
 * @param {Number} max - end of the range
 * @return {Array} - all the numbers in the range
 */
function range(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

/**
 * Searches for greatest common divisor
 * @example
 * // returns 6
 * greatestCommonDivisor(54, 24)
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function greatestCommonDivisor(a, b) {
  return !b ? a : greatestCommonDivisor(b, a % b);
}
