/**
 * @description
 * Checks text message (second argument) with conditions:
 * The text messages should contain exactly N unique numbers between 1 and M
 * (first argument), separated by a comma (,) and/or space(s).
 * Any other character makes the bet invalid.
 * @example
 * // returns [1, 2, 3, 4, 5]
 * validate_bet('1 2 3 4 5)
 * @param {Number} N - number of numbers needed
 * @param {Number} M - max number allowed
 * @param {String} message
 * @return {Array}
 */
// eslint-disable-next-line camelcase
export function validate_bet([N, M], message) {
  if (message.match(/[^,\s\d]/g)) {
    return 'None';
  }
  const numbers = message.match(/(\d+)/g);
  if (numbers.length !== N) {
    return 'None';
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > M || numbers[i] < 1) {
      return 'None';
    }
  }
  return numbers.sort((a, b) => a - b);
}
