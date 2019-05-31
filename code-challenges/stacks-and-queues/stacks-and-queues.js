'use stricts';

class StackNode {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor()
  {
    this.top = null;
  }

  push(value) {
    if(this.top === null){
      this.top = new StackNode(value);
    } else {
      let oldTop = this.top;
      this.top = new StackNode(value);
      this.top.next = oldTop;
    }
  }

  pop() {
    if(this.top === null) {
      return `Can't pop from empty stack`;
    } else {
      let popVal = this.top.value;
      this.top = this.top.next;
      return popVal;
    }
  }

  peek() {
    if(this.top === null) {
      return `Stack is empty`;
    } else {
      return this.top.value;
    }

  }

  toString() {
    var myLinkedListString = [];
    var current = this.top;
    while (current) {
      myLinkedListString.push(current.value);
      current = current.next;
    }
    return myLinkedListString.join(',');
  }
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor()
  {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    if(this.first === null) {
      this.first = new QueueNode(value);
      this.last = this.first;
    } else {
      var newNode = new QueueNode(value);
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
  }

  dequeue() {
    if(this.first === null) {
      return `Can't remove from empty queue`;
    } else {
      let dequeueVal = this.first.value;
      this.first = this.first.next;
      if(this.first){
        this.first.prev = null;
      }
      return dequeueVal;
    }
  }

  toString() {
    var myLinkedListString = [];
    var current = this.first;
    while (current) {
      myLinkedListString.push(current.value);
      current = current.next;
    }
    return myLinkedListString.join(',');
  }

  peek() {
    if(this.first === null) {
      return `Stack is empty`;
    } else {
      return this.first.value;
    }
  }
}

module.exports = {
  Stack,
  Queue
};
