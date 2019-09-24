/**
 * @description
 * Compares and updates the inventory stored in a 2D array against a second
 * 2D array of a fresh delivery. The returned inventory array
 * is in alphabetical order by item.
 * @example
 * // returns [[42, "Bowling Ball"], [2, "Dirty Sock"]
 * updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"]],
 * [[21, "Bowling Ball"]],)
 * @param {Array} currentInv
 * @param {Array} newInv
 * @return {Array}
 */
export function updateInventory(currentInv, newInv) {
  const resultInv = Array.from(currentInv);
  for (let i = 0; i < newInv.length; i++) {
    let hasItem = false;
    for (let j = 0; j < resultInv.length; j++) {
      if (resultInv[j][1] === newInv[i][1]) {
        hasItem = true;
        resultInv[j][0] += newInv[i][0];
        break;
      }
    }
    if (!hasItem) {
      resultInv.push(newInv[i]);
    }
  }
  return resultInv.sort((a, b) => {
    return a[1] > b[1];
  });
}
