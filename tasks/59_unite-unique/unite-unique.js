/**
 * Unites several arrays and removes reoccurring elements
 * @example
 * // returns '[1,3,2,5,4]'
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
 * @param {Array<Array>} args - arrays to combine
 * @return {Array}
 */
export function uniteUnique(...args) {
  const combinedArrays = args.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);
  return Array.from(new Set(combinedArrays));
}
