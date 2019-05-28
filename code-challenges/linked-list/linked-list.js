'use strict';

class Node {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor()
  {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    var node = new Node(value);
    var current;

    if (this.head === null)
      this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insert(value) {
    if(this.head === null){
      this.head = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }

  }

  includes(value) {
    var count = 0; // eslint-disable-line
    var current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      count++;
      current = current.next;
    }
    return false;
  }

  toString() {
    var myLinkedListString = '';
    var current = this.head;
    while (current) {
      myLinkedListString += current.value + ',';
      current = current.next;
    }
    return myLinkedListString;
  }
}

module.exports = LinkedList;
