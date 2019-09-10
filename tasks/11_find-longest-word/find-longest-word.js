/* eslint-disable max-len */
export function findLongestWord(str) {
  let arrayOfStrings = str.split(' ');
  return arrayOfStrings.reduce((accamulator, currentValue) => {
    return accamulator.length < currentValue.length ? currentValue : accamulator;
  }).length;
}
