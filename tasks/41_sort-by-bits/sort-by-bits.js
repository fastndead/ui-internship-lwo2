export function sortByBits(arr) {
  return [...arr].sort((a, b) => {
    return bitCount(a) - bitCount(b) === 0 ? a - b : bitCount(a) - bitCount(b);
  } );
}

function bitCount(n) {
  const bits = n.toString(2).match(/1/g);
  return bits ? bits.length: 0;
}
