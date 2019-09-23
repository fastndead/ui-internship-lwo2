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
    this.fullName = fullName;
  }

  /**
   * @description
   * getter for first name of the person
   * @return {string}
   */
  getFirstName() {
    return this.fullName.split(' ')[0];
  }

  /**
   * @description
   * getter for last name of the person
   * @return {string}
   */
  getLastName() {
    return this.fullName.split(' ')[1];
  }

  /**
   * @description
   * getter for full name of the person
   * @return {String}
   */
  getFullName() {
    return this.fullName;
  }

  /**
   * @description
   * setter for first name of the person
   * @param {String} first
   */
  setFirstName(first) {
    this.fullName = first + ' ' + this.getLastName();
  }

  /**
   * @description
   * setter for the last name of the person
   * @param {String} last
   */
  setLastName(last) {
    this.fullName = this.getFirstName() + ' ' + last;
  }

  /**
   * @description
   * setter for the full name of the person
   * @param {String} firstAndLast
   */
  setFullName(firstAndLast) {
    this.fullName = firstAndLast;
  }
}
