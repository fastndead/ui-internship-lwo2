/**
 * Calculates sum of two numbers and all numbers between them
 * @param {Number[]} arr - array of two numbers
 * @return {number} - sum of two numbers and all numbers between them
 */
export function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
