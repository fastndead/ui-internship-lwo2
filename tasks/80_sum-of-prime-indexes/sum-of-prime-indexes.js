/**
 * @description
 * Calculates the sum of elements occupying prime-numbered indices
 * @example
 * // returns 7
 * sumPrimeIndexedElements([1, 2, 3, 4])
 * @param {Array} arr - array of numbers
 * @return {Number}
 */
export function sumPrimeIndexedElements(arr) {
  if (arr.length < 2) {
    return 0;
  }
  let result = arr[2];
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      result += arr[i];
    }
  }
  return result;
}


/**
 * @description
 * checks if number is prime
 * @example
 * // returns true
 * isPrime(5)
 * @param {Number} number
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
