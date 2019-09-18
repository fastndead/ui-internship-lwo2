/**
 * Converts string to pig-latin
 * @example
 * // returns 'aliforniacay'
 * translatePigLatin('california')
 * @param {String} str - string to convert
 * @return {string} - converted to pig-latin string
 */
export function translatePigLatin(str) {
  if (!isConsonant(str[0])) {
    return str + 'way';
  }
  const foundConsanants = findFirstConsonants(str);
  return str.replace(foundConsanants, '') + foundConsanants + 'ay';
}

/**
 * Searches for first occurrence of one or more consonants,
 * not divided by vowels
 * @param {String} str - sting to search in
 * @return {string} substring that contains consonants
 */
function findFirstConsonants(str) {
  let consonants = '';
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (isConsonant(str[i])) {
      flag = true;
      consonants += str[i];
    }
    if (!isConsonant(str[i]) && flag) {
      return consonants;
    }
  }
}

/**
 * checks if the letter is consonant
 * @param {String} letter - letter to check
 * @return {boolean}
 */
function isConsonant(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return !vowels.includes(letter);
}
