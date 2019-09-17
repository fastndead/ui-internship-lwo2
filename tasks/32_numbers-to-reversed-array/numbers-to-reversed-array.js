export function numberToReversedArray(number) {
  return number
      .toString()
      .split('')
      .reverse()
      .map((item) => parseInt(item));
}
