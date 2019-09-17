export function uniqueInOrder([...str]) {
  return str.filter((item, index, self) => {
    return item !== self[index + 1];
  });
}
