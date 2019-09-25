/**
 * @description
 * Finds missing term of an arithmetic sequence
 * @example
 * // returns 7
 * findMissing([1,3,5,9,11])
 * @param {Array} progression
 * @return {Number} - missing term
 */
export function findMissing(progression) {
  let difference;
  if (progression.length === 3) {
    difference = Math.min(progression[1] - progression[0],
        progression[2] - progression[1]);
  } else {
    for (let i = 0; i < progression.length - 2; i++) {
      if (progression[i + 1] - progression[i] ===
        progression[i + 2] - progression[i + 1]) {
        difference = progression[i + 1] - progression[i];
        break;
      }
    }
  }
  for (let i = 0; i < progression.length; i++) {
    if (progression[i + 1] - progression[i] !== difference) {
      return progression[i] + difference;
    }
  }
  return -1;
}
