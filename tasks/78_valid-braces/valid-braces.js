/**
 * @description
 * validates if parenthesis is balanced
 * @example
 * // returns true
 * validBraces('[]{}()')
 * @param {String} str
 * @return {boolean}
 */
export function validBraces(str) {
  const stackForBraces = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' ||
      str[i] === '(' ||
      str[i] === '[') {
      stackForBraces.push(str[i]);
    }
    if (str[i] === ']' || str[i] === '}' || str[i] === ')') {
      const peek = stackForBraces[stackForBraces.length - 1];

      if (str[i] === ']' && peek !== '[' ||
        str[i] === ')' && peek !== '(' ||
        str[i] === '}' && peek !== '{') {
        return false;
      } else {
        stackForBraces.pop();
      }
    }
  }
  return true;
}
