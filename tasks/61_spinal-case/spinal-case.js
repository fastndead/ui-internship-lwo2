/**
 * Converts incoming string to spinal case
 * @example
 * //returns
 *
 * @param {String} str
 * @return {string}
 */
export function spinalCase(str) {
  return str
      .split(/\s|_|(?=[A-Z])/)
      .join('-')
      .toLowerCase();
}
