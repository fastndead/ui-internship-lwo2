export function maxProduct(arr) {
  let max = arr[0] * arr[1];
  for (let i = 1; i< arr.length - 1; i++) {
    if (max < arr[i] * arr[i + 1]) {
      max = arr[i] * arr[i + 1];
    }
  }
  return max;
}
