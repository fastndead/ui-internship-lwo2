export function removeDuplicates(a) {
  return a.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
}
