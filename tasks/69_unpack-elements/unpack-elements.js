/**
 * Flattens a nested array
 * @param {Array} arr
 * @return {Array}
 */
export function unpackArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, curr) => {
      return acc.concat(unpackArray(curr));
    }, []);
  } else {
    return arr;
  }
}
