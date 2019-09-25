/**
 * Calculates the sum of all the prime numbers up to
 * and including the provided number
 * @example
 * // returns 17
 * sumPrimes(10)
 * @param {Number} number
 * @return {number}
 */
export function sumPrimes(number) {
  let sum = 2;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}


/**
 * Checks if number is prime
 * @example
 * // returns true
 * isPrime(3)
 * //returns false
 * isPrime(4)
 * @param {Number} number
 * @return {boolean} - result of check
 */
function isPrime(number) {
  let isPrime = number !== 1;
  for (let j = 2; j< Math.sqrt(number)+1; j++) {
    if (number % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return true;
  }
}
