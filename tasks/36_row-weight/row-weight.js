export function rowWeights(arr) {
  let flag = true;
  return arr.reduce((acc, current) => {
    if (flag) {
      acc[0] += current;
    }
    if (!flag) {
      acc[1] += current;
    }
    flag = !flag;
    return acc;
  }, [0, 0]);
}
