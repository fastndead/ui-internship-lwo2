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
  return [...arr1.filter((item) => !arr2.includes(item)),
    ...arr2.filter((item) => !arr1.includes(item))];
}
