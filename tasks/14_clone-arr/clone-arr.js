
export function cloneArr(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  return newArr;
}
