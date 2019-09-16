export function abbreviated(str) {
  const [name, ...initials] = str.split(' ');
  return [name, ...initials.map((item) => {
    return item[0].toLocaleUpperCase() + '.';
  })].join(' ').trim();
}
