/**
 * @description
 * validates if parenthesis is balanced
 * @example
 * // returns true
 * validBraces('[]{}()')
 * @param {String} str
 * @return {boolean}
 */
export function validBraces(str) {
  let prev = '';
  while (str.length !== prev.length) {
    prev = str;
    str = str
        .replace('()', '')
        .replace('[]', '')
        .replace('{}', '');
  }
  return (str.length === 0);
}

