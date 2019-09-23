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

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.amount++;
      return;
    }
    newNode.setPrev(this.tail);
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
    if (foundValue !== null) {
      if (foundValue === this.tail) {
        this.pop();
      } else {
        foundValue.prev = foundValue.next;
        foundValue = foundValue.prev;
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
    while (currentNode.next !== null) {
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
    this.tail.prev.setNext(null);
    this.tail = this.tail.prev;
  }

  /**
   * inserts value after value, given as the first parameter
   * @param {Object} valueToFind - value to insert after
   * @param {Object} valueToInsert
   * @return {boolean} - if value was inserted
   */
  insertAfter(valueToFind, valueToInsert) {
    const foundValue = this.find(valueToFind);
    if (foundValue !== null) {
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
    while (currentNode.next !== null) {
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
   * @param {Object} prev
   */
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  /**
   * setter for the 'next' property
   * @param {Object} link
   */
  setNext(link) {
    this.next = link;
  }
  /**
   * setter for the 'prev' property
   * @param {Object} link
   */
  setPrev(link) {
    this.prev = link;
  }
}
