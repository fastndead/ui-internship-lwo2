export function maxTripletSum(arr) {
  const arrWithoutDuplicates = arr.filter((item, pos, self) => {
    return self.lastIndexOf(item) === pos;
  });
  arrWithoutDuplicates.sort((a, b) => a-b).reverse();
  return arrWithoutDuplicates[0] +
    arrWithoutDuplicates[1] +
    arrWithoutDuplicates[2];
  // Bonus* : for quartets and quintets we can
  // add to the final result next number from the array
}
