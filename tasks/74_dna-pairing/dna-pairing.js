/**
 * @description
 * takes each character in string and turns it into pair of that character
 * and the base pair
 * @example
 * // returns [['G', 'C'], ['C','G'],['G', 'C']]
 * pairElement('GCG')
 * @param {String} str - incoming dna material
 * @return {Array} - pairs
 */
export function pairElement(str) {
  return str.split('').map((item) => {
    switch (item) {
      case 'C': return ['C', 'G'];
      case 'G': return ['G', 'C'];
      case 'T': return ['T', 'A'];
      case 'A': return ['A', 'T'];
    }
  });
}
