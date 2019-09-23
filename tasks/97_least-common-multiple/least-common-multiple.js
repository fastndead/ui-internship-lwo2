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
  return (a * b) / gcd(a, b);
}

/**
 * @description
 * Searches for greatest common divisor
 * @example
 * // returns 6
 * gcd(54, 24)
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}
