/**
 * Calculates the sum of all odd Fibonacci
 * numbers that are less than or equal to num
 * @example
 * // returns 1785
 * sumFibs(1000)
 * @param {Number} num
 * @return {number} – sum of all odd Fibonacci numbers
 */
export function sumFibs(num) {
  const numbers = [1, 1];
  let nextNumber = numbers[0] + numbers[1];

  while (nextNumber <= num) {
    numbers.push(nextNumber);
    nextNumber = numbers[numbers.length - 2] + numbers[numbers.length - 1];
  }

  return numbers
      .filter((item) => item % 2 !== 0)
      .reduce((acc, curr) => acc + curr);
}
