export function titleCase(str) {
  return str.toLowerCase()
      .split(' ')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ');
}
