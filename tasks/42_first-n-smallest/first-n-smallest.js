export function firstNSmallest(arr, num) {
  const sortedArr = [...arr].sort();
  return arr.filter((item) => {
    return sortedArr.slice(0, num).includes(item);
  }).slice(0, num);
}
