/**
 * @description
 * Find the smallest common multiple of the provided parameters
 * @example
 * //returns 60
 * smallestCommons(1, 5)
 * @param {Number} a
 * @param {Number} b
 * @return {number} - smallest common multiple
 */
export function leastCommonMultiple(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

/**
 * @description
 * Searches for greatest common divisor
 * @example
 * // returns 6
 * greatestCommonDivisor(54, 24)
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function greatestCommonDivisor(a, b) {
  return !b ? a : greatestCommonDivisor(b, a % b);
}
