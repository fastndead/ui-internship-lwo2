export function nextInLine(arr, item) {
  arr.push(item);
  const firstInLine = arr[0];
  arr.shift();
  return firstInLine;
}
