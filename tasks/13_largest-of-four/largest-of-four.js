export function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const maxOfFour = arr[i].reduce((acc, current) => {
      return acc < current ? current : acc;
    });
    result.push(maxOfFour);
  }
  return result;
}
