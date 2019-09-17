/**
 * Unites several arrays and removes reoccurring elements
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
