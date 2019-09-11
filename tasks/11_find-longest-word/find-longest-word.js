export function findLongestWord(str) {
  const arrayOfStrings = str.split(' ');
  return arrayOfStrings.reduce((accamulator, currentValue) => {
    return (accamulator.length < currentValue.length)
      ? currentValue : accamulator;
  }).length;
}
