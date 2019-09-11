export function humanizeFormat(number) {
  if (typeof number != 'number' ||
      number === 0 ||
      isNaN(number) ||
      !isFinite(number)) {
    return '';
  }
  const stringNumber = number.toString();
  if (stringNumber.endsWith('1') && !stringNumber.endsWith('11')) {
    return stringNumber.concat('st');
  }
  if (stringNumber.endsWith('2') && !stringNumber.endsWith('12')) {
    return stringNumber.concat('nd');
  }
  if (stringNumber.endsWith('3') && !stringNumber.endsWith('13')) {
    return stringNumber.concat('rd');
  }
  return stringNumber.concat('th');
}
