/**
 * @description
 * Class represents a person
 */
export class Person {
  /**
   * @description
   * creates a person with the name
   * @param {String} fullName
   */
  constructor(fullName) {
    [this._firstName, this._lastName] = fullName.split(' ');
  }

  /**
   * @description
   * getter for first name of the person
   * @return {string}
   */
  getFirstName() {
    return this._firstName;
  }

  /**
   * @description
   * getter for last name of the person
   * @return {string}
   */
  getLastName() {
    return this._lastName;
  }

  /**
   * @description
   * getter for full name of the person
   * @return {String}
   */
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  /**
   * @description
   * setter for first name of the person
   * @param {String} first
   */
  setFirstName(first) {
    this._firstName = first;
  }

  /**
   * @description
   * setter for the last name of the person
   * @param {String} last
   */
  setLastName(last) {
    this._lastName = last;
  }

  /**
   * @description
   * setter for the full name of the person
   * @param {String} firstAndLast
   */
  setFullName(firstAndLast) {
    [this._firstName, this._lastName] = firstAndLast.split(' ');
  }
}
