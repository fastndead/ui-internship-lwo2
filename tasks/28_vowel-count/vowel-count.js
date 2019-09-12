export function getVowelCount(str) {
  const vowels = str.match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}
