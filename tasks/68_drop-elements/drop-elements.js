export function dropElements(arr, func) {
  const result = [...arr];
  while (!func(result[0]) && result.length > 0) {
    result.shift();
  }
  return result;
}
