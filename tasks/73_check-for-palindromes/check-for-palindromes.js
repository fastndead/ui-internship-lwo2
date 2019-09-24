/**
 * @description
 * Checks the string if it's a palindrome
 * @example
 * // returns true
 * palindrome('helleh')
 * @param {String} str - string to check
 * @return {boolean}
 */
export function palindrome(str) {
  const palindrome = str.replace(/[\W_]+/g, '').toLowerCase().split('');
  const leftHalf = palindrome.slice(0, palindrome.length / 2);
  const rightHalf = palindrome.length % 2 === 0 ?
    palindrome.slice(palindrome.length / 2) :
    palindrome.slice(palindrome.length / 2 + 1);
  return JSON.stringify(leftHalf) === JSON.stringify(rightHalf.reverse());
}
// I know, that thare's an easier way to do this, without dividing string in
// halves but this just the way I did it without anyone hinting me,
// so I hope it's fine
