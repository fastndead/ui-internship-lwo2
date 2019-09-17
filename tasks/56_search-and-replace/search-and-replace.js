/**
 * Replaces substring in string with other given string
 * @param {String} str - string to replace in
 * @param {String} before - string to replace
 * @param {String} after - string to replace with
 * @return {String} - result of replacement
 */
export function myReplace(str, before, after) {
  const replaceString = copyCase(before, after);
  return str.replace(before, replaceString);
}

/**
 * Copies casing pattern from one string to another
 * @param {String} from - string to get the casing pattern from
 * @param {Sting} to - string to apply casing pattern to
 * @return {string}
 */
function copyCase(from, to) {
  let result = '';
  for (let i = 0; i < to.length; i++) {
    if (from[i] && from[i] === from[i].toUpperCase()) {
      result += to[i].toUpperCase();
    } else {
      result += to[i].toLowerCase();
    }
  }
  return result;
}
