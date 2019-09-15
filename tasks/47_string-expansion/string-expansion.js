export function stringExpansion(str) {
  const stringWithRepeats = str.replace(/[0-9][a-z]+/gi, letterRepeat);
  return stringWithRepeats.replace(/[0-9]/g, '');
}

function letterRepeat(item) {
  const letters = item.split('').slice(1);
  const numberOfRepeats = Number(item[0]);
  return letters.map((letter) => {
    return letter.repeat(numberOfRepeats);
  }).join('');
}
