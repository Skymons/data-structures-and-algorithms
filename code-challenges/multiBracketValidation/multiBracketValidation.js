'use strcit';

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

  static bracketValidation(str) {
    var brackets = ['(', ')', '[', ']', '{', '}'];
    var openBrackets = ['(', '{', '['];
    var closeBrackets = [')', '}', ']'];
    var splitArr = str.split('').filter(item => {
      brackets.includes(item);
    });

    for(let i = 0; i < splitArr.length; i++) {
      if(openBrackets.includes(splitArr[i])) {
        Stack.push(splitArr[i]);
      }
      if(closeBrackets.includes(splitArr[i]) && Stack.top.value === openBrackets[closeBrackets.indexOf(splitArr[i])]) {
        Stack.pop();
      } else {
        return false;
      }
    }
    return true;
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





module.exports = Stack;
