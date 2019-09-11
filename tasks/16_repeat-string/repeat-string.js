export function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result = result.concat(str);
  }
  return result;
}

