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


