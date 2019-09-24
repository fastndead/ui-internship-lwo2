/**
 * Collection for task
 * @type {Object}
 */
const collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};

/**
 * Updates value of given property of object in collection with
 * given value by id
 * @example
 * //returns {
 * //  '2548': {
 * //    'album': 'Slippery When Wet',
 * //    'artist': 'Bon Jovi',
 * //    'tracks': [
 * //      'Let It Rock',
 * //      'You Give Love a Bad Name',
 * //    ],
 * //  },
 * //  '2468': {
 * //    'album': '1999',
 * //    'artist': 'Prince',
 * //    'tracks': [
 * //      '1999',
 * //      'Little Red Corvette',
 * //    ],
 * //  },
 * //  '1245': {
 * //    'artist': 'Robert Palmer',
 * //    'tracks': [],
 * //  },
 * //  '5439': {
 * //    'album': 'ABBA Gold',
 * //    'tracks'; ['Take a Chance on Me']
 * //  },
 * //}
 * updateRecords({
 *  '2548': {
 *    'album': 'Slippery When Wet',
 *    'artist': 'Bon Jovi',
 *    'tracks': [
 *      'Let It Rock',
 *      'You Give Love a Bad Name',
 *    ],
 *  },
 *  '2468': {
 *    'album': '1999',
 *    'artist': 'Prince',
 *    'tracks': [
 *      '1999',
 *      'Little Red Corvette',
 *    ],
 *  },
 *  '1245': {
 *    'artist': 'Robert Palmer',
 *    'tracks': [],
 *  },
 *  '5439': {
 *    'album': 'ABBA Gold',
 *  },
 * };)
 * @param {String} id - id of the object in collection
 * @param {String} prop - property of object
 * @param {String} value
 * @return {Array<Object>} modified collection
 */
export function updateRecords(id, prop, value ) {
  const collectionCopy = JSON.parse(JSON.stringify(collection));
  if (prop === 'tracks' && !collectionCopy[id][prop]) {
    collectionCopy[id][prop] = [];
  }
  if (value === '') {
    delete collectionCopy[id][prop];
  } else {
    if (Array.isArray(collectionCopy[id][prop])) {
      collectionCopy[id][prop].push(value);
    } else {
      collectionCopy[id][prop] = value;
    }
  }
  return collectionCopy;
}
