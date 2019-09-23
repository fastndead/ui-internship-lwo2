/**
 * @description
 * Reverses capitalization of the string agter every second 'a'
 * @example
 * // return 'The quick brown fox jumps over the lZY DOG.'
 * fatFingers('The quick brown fox jumps over the lazy dog.')
 * @param {String} str
 * @return {string}
 */
export function fatFingers(str) {
  const arrayFromStr = str.split(/[aA]/g);
  let capsLock = false;
  for (let i = 0; i < arrayFromStr.length; i++) {
    if (capsLock) {
      arrayFromStr[i] = reverseCapitalization(arrayFromStr[i]);
    }
    capsLock = !capsLock;
  }
  return arrayFromStr.join('');
}

/**
 * @description
 * Reverses capitalization of the given string
 * @example
 * // returns 'HELlO'
 * reverseCapitalization('helLo)
 * @param {String} str
 * @return {string}
 */
function reverseCapitalization(str) {
  const arrayFromStr = str.split('');
  for (let i = 0; i < arrayFromStr.length; i++) {
    if (arrayFromStr[i] === arrayFromStr[i].toUpperCase()) {
      arrayFromStr[i] = arrayFromStr[i].toLowerCase();
    } else {
      arrayFromStr[i] = arrayFromStr[i].toUpperCase();
    }
  }
  return arrayFromStr.join('');
}
