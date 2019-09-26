/**
 * @description
 * Calculates greatest common divisor of two numbers
 * @example
 * // returns 9
 * greatestCommonDivisor(36, 45)
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function greatestCommonDivisor(a, b) {
  return !b ? a : greatestCommonDivisor(b, a % b);
}
