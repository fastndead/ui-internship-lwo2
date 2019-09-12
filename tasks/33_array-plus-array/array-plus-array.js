export function arrayPlusArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    let numberFromArr1 = arr1[i] ? arr1[i] : 0;
    let numberFromArr2 = arr2[i] ? arr2[i] : 0;
    result.push(numberFromArr1 + numberFromArr2);
  }
  return result;
}
