export function truncateString(str, num) {
  if (str.length > num) {
    let slicePoint = num;
    if (slicePoint > 3) {
      slicePoint -= 3;
    }
    return str.slice(0, slicePoint).concat('...');
  }
  return str;
}
