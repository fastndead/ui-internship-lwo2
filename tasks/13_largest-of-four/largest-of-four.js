export function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].reduce((acc, current)=>{
      return acc < current ? current : acc;
    }));
  }
  return arr;
}
