export function reverseStringInRange(str, arr) {
  const stringArray = str.split('');
  stringArray.splice(arr[0], arr[1] - arr[0] + 1, str
      .split('')
      .slice(arr[0], arr[1] + 1 )
      .reverse()
      .join(''));
  return stringArray.join('');
}
