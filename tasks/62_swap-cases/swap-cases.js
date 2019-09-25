/**
 * Swaps cases of the given string's letters
 * @example
 * // returns 'hELLO wORLD'
 * swapCases('Hello World')
 * @param {string} str - string to swap cases of
 * @return {string}
 */
export function swapCases(str) {
  return str.split('').map((char) => {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }).join('');
}
