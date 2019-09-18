export function findEqualIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftHalf = arr.slice(0, i);
    let rightHalf = arr.slice(i + 1);

    if (sum(leftHalf) === sum(rightHalf)) {
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
