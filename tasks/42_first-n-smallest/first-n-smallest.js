export function firstNSmallest(arr, num) {
  const sortedArr = [...arr].sort();
  const slicedArr = sortedArr.slice(0, num);
  return arr.filter((item) => {
    return slicedArr.includes(item);
  }).slice(0, num);
}
