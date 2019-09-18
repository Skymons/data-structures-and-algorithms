'use strict';

let stack = require('./stacks-and-queues')

class TwoStackQueue {
  constructor()
  {
    this.stack1 = new stack.Stack,
    this.stack2 = new stack.Stack
  }

  enqueue(val) {
    while(this.stack2.top !== null) {
      this.stack2.pop();
    }

    let tempStack = this.stack1.push(val);
    let tempArr = [];

    while(this.stack1.next !== null) {
      let popVal = this.stack1.pop();
      tempArr.push(popVal);
      this.stack2.push(popVal)
    }
    for(let i = tempArr.length - 1; i >= 0; i--) {
      this.stack1.push(tempArr[i])
    }
    return this.stack2;
  }

  toString() {
  }

}

module.exports = TwoStackQueue;