export function checkLetters(arr) {
  const comparable1 = arr[0].toLowerCase();
  const comparable2 = arr[1].toLowerCase();
  for ( let i = 0; i < comparable2.length; i++) {
    if (!comparable1.includes(comparable2[i])) {
      return false;
    }
  }
  return true;
}
