/**
 * @description
 * Copies an argument object
 * @example
 * // returns { a: 1, b: { c:10 } }
 * deepClone({ a: 1, b: { c:10 } })
 * @param {Object} obj - object to copy
 * @return {Object} - copy itself
 */
export function deepClone(obj) {
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        copy[key] = deepClone(obj[key]);
      } else {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
}
