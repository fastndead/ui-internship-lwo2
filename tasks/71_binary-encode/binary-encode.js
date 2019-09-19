/**
 * @description
 * returns binary string of passed English sentence
 * @example
 * // returns '01101000 01100101 01101100 01101100 01101111'
 * binaryEncode(''hello)
 * @param {String} str - English string
 * @returns {string} - binary string
 */

export function binaryEncode(str) {
  if (str) {
    return str
        .split('')
        .map((item) => {
          const number = item.charCodeAt(0).toString(2);
          return '00000000'.substr(number.length) + number;
        }).join(' ');
  }
  return '';
}
