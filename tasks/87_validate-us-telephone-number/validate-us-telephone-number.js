/**
 * @description
 * Validates us phone number
 * @example
 * // returns true
 * telephoneCheck('555-555-5555')
 * @param {String} str
 * @return {boolean}
 */
export function telephoneCheck(str) {
  const phoneMatch = /^(1\s?)?(\(\d{3}\)|\d{3})[\s’\-‘]?\d{3}[\s’\-’]?\d{4}$/g;
  return phoneMatch.test(str);
}
