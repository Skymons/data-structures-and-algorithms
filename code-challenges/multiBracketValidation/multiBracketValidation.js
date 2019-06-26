'use strict';

const { Stack } = require('../stacks-and-queues/stacks-and-queues');

module.exports = function bracketValidation(str) {
  var brackets = ['(', ')', '[', ']', '{', '}'];
  var openBrackets = ['(', '{', '['];
  var closeBrackets = [')', '}', ']'];
  var splitArr = str.split('').filter(item => {
    return brackets.includes(item);
  });

  var stack = new Stack();

  for(let i = 0; i < splitArr.length; i++) {
    if(openBrackets.includes(splitArr[i])) {
      stack.push(splitArr[i]);
    }
    else if(closeBrackets.includes(splitArr[i])
      && stack.peek() === openBrackets[closeBrackets.indexOf(splitArr[i])]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.peek() === 'Stack is empty';
};
