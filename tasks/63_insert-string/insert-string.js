/**
 * Inserts string into the other string
 * @example
 * // returns 'We are doing some JavaScript exercises.'
 * insert('We are doing some exercises.','JavaScript', 18);
 * @param {String} str - string to insert in
 * @param {String} insertable - string to insert
 * @param {String} position - index to insert at
 * @return {string}
 */
export function insert(str, insertable, position = 0) {
  const result = str.split('');
  result.splice(position, 0, insertable );
  return result.join('');
}
