/**
 * Convert decimal numerals to roman
 * @example
 * //returns 'III'
 * convertToRoman(3)
 * @param {Number} number - decimal number
 * @return {String} - roman numeral
 */
export function convertToRoman(number) {
  const romanDecimalMatch = [[1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']];

  return romanDecimalMatch.reduce((acc, curr) => {
    while (curr[0] <= number) {
      acc += curr[1];
      number -= curr[0];
    }
    return acc;
  }, '');
}

