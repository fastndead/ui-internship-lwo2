export function getIndexToInsert(arr, num) {
  return [...arr, num].sort((a, b) => a - b).indexOf(num);
}
