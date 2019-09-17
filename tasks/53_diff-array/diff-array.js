/**
 * Calculates symmetric difference of the two arrays
 * @param {Array} arr1 - first array
 * @param {Array} arr2 - second array
 * @return {Array} - symmetric difference of the two arrays
 */
export function diffArray(arr1, arr2) {
  return [...arr1.filter((item) => !arr2.includes(item)),
    ...arr2.filter((item) => !arr1.includes(item))];
}
