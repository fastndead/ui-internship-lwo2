/**
 * @description
 * Calculates the largest number obtained after inserting the
 * following operators and brackets: +, *, () between incoming parameters
 * @example
 * // returns 4
 * expressionMatter(2, 1, 1)
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @return {number}
 */
export function expressionMatter(a, b, c) {
  return Math.max((a + b) * c,
      a * (b + c),
      a + b + c,
      a * b * c);
}
