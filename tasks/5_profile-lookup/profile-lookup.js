export function lookupProfile(firstName, prop) {
<<<<<<< HEAD
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
=======
  const foundContact = contacts.find((person) => {
    person.firstName === firstName;
  }
  );
  if (foundContact !== undefined) {
    if (foundContact.hasOwnProperty(prop)) {
      return foundContact[prop];
    } else {
      return 'No such property';
    }
  } else {
    return 'No such contact';
  }
}

>>>>>>> 9a99949c5f7851e58d6f4aed49ae863c99a53a6f
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
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 9a99949c5f7851e58d6f4aed49ae863c99a53a6f
];
