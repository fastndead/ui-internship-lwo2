/**
 * @description
 * Counts all the elements below given, that are can be presented as
 * difference of two perfect squares
 * @example
 * // returns 3
 * squares(4)
 * @param {Number} n
 * @return {Number}
 */
export function squares(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0 || i % 4 === 0) {
      count++;
    }
  }
  return count - 1;
}
