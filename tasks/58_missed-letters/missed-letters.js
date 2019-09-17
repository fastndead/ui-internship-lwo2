/**
 * Finds the letter from the string, that is missing,
 * considering that string should contain letters in alphabetical order
 * @param {String} str - string to search in
 * @return {string} - missing letter
 */
export function findLetter(str) {
  for ( let i = 0; i < str.length - 1; i++) {
    const nextCharInAlphabet = str.charCodeAt(i) + 1;
    const nextCharInStr = str.charCodeAt(i + 1);
    if (nextCharInAlphabet !== nextCharInStr) {
      return String.fromCharCode(nextCharInAlphabet);
    }
  }
}
