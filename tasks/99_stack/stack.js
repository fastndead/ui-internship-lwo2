/**
 * @description
 * Represents stack data structure
 */
export class Stack {
  /**
   * creates new empty stack object
   */
  constructor() {
    this.last = null;
    this.size = 0;
  }

  /**
   * pushes element in stack
   * @param {Object} value
   */
  push(value) {
    const newNode = new Node(value);
    if (this.last === null) {
      this.last = newNode;
      this.size++;
      return;
    }
    this.last.setNext(newNode);
    newNode.setPrev(this.last);
    this.last = newNode;
    this.size++;
  }

  /**
   * removes last element from stack
   * @return {Object} - value of the last element
   */
  pop() {
    if (this.size < 1) {
      return null;
    }
    const last = this.last.value;
    if (this.size === 1) {
      this.last = null;
      return last;
    }
    this.last = this.last.prev;
    this.last.next = null;
    return last;
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
