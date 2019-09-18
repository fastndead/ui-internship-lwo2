/**
 * Returns the first element in the given array that returns true
 * once send to the function received as second argument
 * @example
 * //undefined
 * findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
 * @param {Array} arr
 * @param {Function} func
 * @return {*} - element, that passed the func returning true
 */
export function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
