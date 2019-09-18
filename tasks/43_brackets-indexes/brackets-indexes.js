export function findCloseIndex(str, index) {
  if (str[index] !== '(') {
    return -1;
  }

  let bracketCount = 1;
  for (let i = index + 1; i < str.length; i++) {
    if (str[i] === '(') {
      bracketCount++;
      continue;
    }
    if (str[i] === ')') {
      if (--bracketCount === 0) {
        return i;
      }
    }
  }
  return -1;
}
