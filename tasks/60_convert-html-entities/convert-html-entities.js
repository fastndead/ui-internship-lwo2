/**
 * Replaces occurrences of given characters (&, <, >, "(double quote),
 * and '(apostrophe)) with their corresponding HTML entities
 * @example
 * // returns 'Dolce &amp; Gabbana'
 * convertHTML('Dolce & Gabbana')
 * @param {String} str - string to perform replacement
 * @return {String}
 */
export function convertHTML(str) {
  return str.replace(/[&'"<>]/gim, function(char) {
    switch (char.charCodeAt(0)) {
      case 38: return '&amp;';
      case 60: return '&lt;';
      case 62: return '&gt;';
      case 34: return '&quot;';
      case 39: return '&apos;';
    }
  });
}
