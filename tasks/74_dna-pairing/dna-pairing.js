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
  const associations = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  const arr = str.split('');
  return arr.map((item) => [item, associations[item]]);
}
