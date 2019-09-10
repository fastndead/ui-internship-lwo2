export function titleCase(str) {
  str = str.toLowerCase();
  let words = str.split(' ');
  words.map((item) => item[0].toUpperCase() + item.slice(1));
  return words.join(' ');
}
