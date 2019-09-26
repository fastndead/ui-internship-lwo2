/**
 * Represents linked list data structure
 */
export class LinkedList {
  /**
   * creates new empty linked list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  /**
   * pushes value to the end of the linked list
   * @param {Object} value
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.amount++;
      return;
    }
    this.tail.setNext(newNode);
    this.tail = newNode;
    this.amount++;
  }

  /**
   * removes given value from list
   * @param {Object} valueToRemove
   * @return {boolean} - if value was found and removed
   */
  removeItem(valueToRemove) {
    let foundValue = this.find(valueToRemove);
    if (foundValue) {
      if (foundValue === this.tail) {
        this.pop();
      } else {
        this.findPrev(valueToRemove).next = foundValue.next;
      }
      return true;
    }
    return false;
  }

  /**
   * applies callback function to every element in list
   * @param {Function} callback
   */
  iterate(callback) {
    let currentNode = this.head;
    while (currentNode.next) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
    callback(this.tail);
  }

  /**
   * Removes last element from list
   */
  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.findPrev(this.tail.value);
    this.tail.next = null;
  }

  /**
   * inserts value after value, given as the first parameter
   * @param {Object} valueToFind - value to insert after
   * @param {Object} valueToInsert
   * @return {boolean} - if value was inserted
   */
  insertAfter(valueToFind, valueToInsert) {
    const foundValue = this.find(valueToFind);
    if (foundValue) {
      foundValue.next = new Node(valueToInsert, foundValue.next, foundValue);
      return true;
    }
    return false;
  }

  /**
   * Searches for the given value in list
   * @param {Object} value - value to find
   * @return {null| Object} if found - returns found element, if not – null
   */
  find(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    if (this.tail.value === value) {
      return this.tail;
    }
    return null;
  }

  /**
   * Searches for the given value in list and returns previous element
   * @param {Object} value - value to find
   * @return {null| Object} if found - returns found element, if not – null
   */
  findPrev(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

/**
 * @description
 * Represents node of the linked list
 */
class Node {
  /**
   * creates new node
   * @param {Object} value
   * @param {Object} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * setter for the 'next' property
   * @param {Object} link
   */
  setNext(link) {
    this.next = link;
  }
}
