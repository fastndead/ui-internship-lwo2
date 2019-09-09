export function lookupProfile(firstName, prop){
    var foundContact = contacts.find(person => person.firstName === firstName);
    if(foundContact !== undefined){
        if(foundContact.hasOwnProperty(prop)){
            return foundContact[prop]
        }
        else{ 
            return "No such property"
        }
    }else{
        return "No such contact"
    }
}

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
