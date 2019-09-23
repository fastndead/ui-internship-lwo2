/**
 * @description
 * Finds element pairs in the given array whose sum equal the second
 * argument arg and return the sum of their indices.
 * @example
 * // returns 11
 * pairwise([1, 4, 2, 3, 0, 5], 7)
 * @param {Array} arr
 * @param {Number} arg - argument to compare with
 * @return {Number} - sum of indices of found elements
 */
export function pairwise(arr, arg) {
  const arrWithIndices = arr.map((item, i) => {
    return {value: item, index: i};
  });
  const resultIndices = [];
  for (let i = 0; i < arrWithIndices.length; i++) {
    if (arrWithIndices[i].index !== -1) {
      const multiple1 = arrWithIndices[i].value;
      for (let j = 0; j < arrWithIndices.length; j++) {
        if (arrWithIndices[j].index !== -1 && j !== i) {
          const multiple2 = arrWithIndices[j].value;
          if (multiple1 + multiple2 === arg) {
            resultIndices.push(i, j);
            arrWithIndices[i].index = -1;
            arrWithIndices[j].index = -1;
            break;
          }
        }
      }
    }
  }
  return resultIndices.reduce((a, b) => a + b, 0);
}
