/**
 * @description
 * Calculates primorial of the given number
 * @example
 * // returns 30030
 * numPrimorial(6)
 * @param {Number} num
 * @return {number} - primorial
 */
export function numPrimorial(num) {
  let result = 2;
  for (let i = 0, prime = 2; i < num - 1; i++) {
    while (!isPrime(prime)) {
      prime++;
    }
    result *= prime;
    prime++;
  }
  return result;
}

/**
 * @description
 * checks if number is prime
 * @example
 * // returns true
 * isPrime(5)
 * @param {Number} number ot check
 * @return {boolean}
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
