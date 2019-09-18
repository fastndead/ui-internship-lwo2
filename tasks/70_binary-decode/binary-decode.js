export function binaryDecode(str) {
  if (str) {
    return String.fromCharCode(...str.split(' ').map((item) => {
      return parseInt(item, 2);
    }));
  }
  return '';
}
