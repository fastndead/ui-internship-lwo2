/**
 * @description
 * takes each character in string and turns it into its' base pair
 * @example
 * // returns 'TAACG'
 * DNAStrand("ATTGC")
 * @param {String} str - incoming dna material
 * @return {String}
 */
export function DNAStrand(str) {
  const associations = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  const arr = str.split('');
  return arr.map((item) => [associations[item]]).join('');
}
