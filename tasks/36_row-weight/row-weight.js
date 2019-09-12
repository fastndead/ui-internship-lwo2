export function rowWeights(arr) {
  let flag = true;
  return arr.reduce((acc, current) => {
      flag? acc[0] += current : acc[1] += current;
      flag = !flag;
      return acc;
  }, [0, 0]);
}
