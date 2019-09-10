export function lookupProfile(firstName, prop) {
  let foundContact = contacts.find((person) => {
    return person.firstName === firstName;
  }
  );

  if (foundContact && foundContact.hasOwnProperty(prop)) {
    return foundContact[prop];
  } else {
    if (foundContact === undefined) {
      return 'No such contact';
    }
    if (!foundContact.hasOwnProperty(prop)) {
      return 'No such property';
    }
  }
}
const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  },
];
