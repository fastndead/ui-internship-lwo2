/**
 * Calculates sum of two numbers and all numbers between them
 * @example
 * // returns 45
 * sumAll([5, 10])
 * @param {Number[]} arr - array of two numbers
 * @return {number} - sum of two numbers and all numbers between them
 */
export function sumAll(arr) {
  let sum = 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
