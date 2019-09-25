/**
 * @description
 * Searches for extra added character in second parameter,
 * that doesn't exsist in first parameter
 * @example
 * // returns 'c'
 * addedChar('aabbcc', 'aacccbbcc')
 * @param {String} initialStr
 * @param {String} modifiedStr
 * @return {String}
 */
export function addedChar(initialStr, modifiedStr) {
  const initialArr = initialStr.split('');
  return modifiedStr.split('').reduce((acc, curr) => {
    if (initialArr.includes(curr)) {
      delete initialArr[initialArr.indexOf(curr)];
      return acc;
    } else {
      return curr;
    }
  }, '');
}
