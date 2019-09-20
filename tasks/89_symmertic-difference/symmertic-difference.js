/**
 * @description
 * Returns symmetric difference of multiple arrays
 * @example
 * // returns [3, 4, 5]
 * sym([1, 2, 3], [5, 2, 1, 4])
 * @param {Array<Array>}args - arrays
 * @return {Array}
 */
export function sym(...args) {
  return args.reduce((acc, curr) => {
    return diffArray(acc, curr);
  }, []);
}
/**
 * Calculates symmetric difference of the two arrays
 * // returns '["pink wool"]'
 * diffArray(["diorite", "andesite", "grass", "dirt", "pink wool",
 * "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
 * @param {Array} arr1 - first array
 * @param {Array} arr2 - second array
 * @return {Array} - symmetric difference of the two arrays
 */
export function diffArray(arr1, arr2) {
  const arr1Copy = Array.from(new Set(arr1));
  const arr2Copy = Array.from(new Set(arr2));
  const result = [...arr1Copy.filter((item) => !arr2Copy.includes(item)),
    ...arr2Copy.filter((item) => !arr1Copy.includes(item))];
  return result.sort((a, b) => a - b);
}
