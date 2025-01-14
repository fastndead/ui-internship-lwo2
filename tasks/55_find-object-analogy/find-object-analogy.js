/**
 * Finds object in an array, that has properties from the searchValue
 * @example
 * // returns [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
 * whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
 * @param {Array} array - array to search in
 * @param {Object} searchValue - value to search for
 * @return {Object} - found object
 */
export function whatIsInAName(array, searchValue) {
  return array.filter((searchableObj) => {
    let isPropFound = false;
    for (let key in searchValue) {
      if (searchValue.hasOwnProperty(key)) {
        isPropFound = searchableObj.hasOwnProperty(key) &&
          searchableObj[key] === searchValue[key];
      }
    }
    return isPropFound;
  });
}


