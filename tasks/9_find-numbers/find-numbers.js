export function getNumbers(str) {
  return str.match(/\d/g).map((item) => Number(item));
}
