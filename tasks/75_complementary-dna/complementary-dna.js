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
  return str.split('').map((item) => {
    switch (item) {
      case 'C': return 'G';
      case 'G': return 'C';
      case 'T': return 'A';
      case 'A': return 'T';
      default: return '';
    }
  }).join('');
}
