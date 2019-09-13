export function rot13Encoder(str) {
  const arrayFromString = Array.from(str);
  return arrayFromString
      .map(cipher).join('');
}

function cipher(letter) {
  const letterCode = letter.charCodeAt(0);
  if (letterCode >= 110 && letterCode <= 90 ||
    letterCode >= 78 && letterCode <=90) {
    return String.fromCharCode(letterCode - 13);
  }
  if (letterCode <= 110 && letterCode >= 97 ||
    letterCode <= 78 && letterCode >= 65) {
    return String.fromCharCode(letterCode + 13);
  }
  return letter;
}
