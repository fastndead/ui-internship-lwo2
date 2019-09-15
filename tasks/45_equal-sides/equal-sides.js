export function findEqualIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length))) {
      return i;
    }
  }
  return -1;
}

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
