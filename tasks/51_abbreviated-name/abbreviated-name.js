/**
 * Abbreviates every word in string except for the first word
 * @example
 * // returns 'Verbovyi D.'
 * abbreviated(‘Verbovyi Dmytro’)
 * @param {string} str - given string
 * @return {string} - Abbreviated string
 */
export function abbreviated(str) {
  const [name, ...initials] = str.split(' ');
  return [name, ...initials.map((item) => {
    return item[0].toLocaleUpperCase() + '.';
  })].join(' ').trim();
}
