export function trimWhiteSpaces(str) {
<<<<<<< HEAD
  const result = str.replace(/ /g, '');
  return result;
=======
  return str.split(' ').join('');
>>>>>>> 9a99949c5f7851e58d6f4aed49ae863c99a53a6f
}
