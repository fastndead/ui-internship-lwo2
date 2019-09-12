export function findLongestWord(str) {
  const arrayOfStrings = str.split(' ');
  return arrayOfStrings.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue.length);
  }, 0);
}
