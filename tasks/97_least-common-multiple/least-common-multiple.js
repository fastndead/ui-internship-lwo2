/**
 * @description
 * Find the smallest common multiple of the provided parameters
 * @example
 * //returns 60
 * smallestCommons(1, 5)
 * @param {Number} first
 * @param {Number} second
 * @return {number} - smallest common multiple
 */
export function leastCommonMultiple(first, second) {
  return (first * second) / greatestCommonDivisor(first, second);
}

/**
 * @description
 * Searches for greatest common divisor
 * @example
 * // returns 6
 * greatestCommonDivisor(54, 24)
 * @param {Number} fisrts
 * @param {Number} second
 * @return {Number}
 */
export function greatestCommonDivisor(fisrts, second) {
  return !second ? fisrts : greatestCommonDivisor(second, fisrts % second);
}
