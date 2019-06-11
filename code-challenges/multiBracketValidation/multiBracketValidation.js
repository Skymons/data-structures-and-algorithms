'use strict';

const { Stack } = require('../stacks-and-queues/stacks-and-queues');

module.exports = function bracketValidation(str) {
  var brackets = ['(', ')', '[', ']', '{', '}'];
  var openBrackets = ['(', '{', '['];
  var closeBrackets = [')', '}', ']'];
  var splitArr = str.split('').filter(item => {
    return brackets.includes(item);
  });
  console.log({ str, splitArr })

  var stack = new Stack();

  for(let i = 0; i < splitArr.length; i++) {
    if(openBrackets.includes(splitArr[i])) {
      stack.push(splitArr[i]);
      console.log('pushed', stack.toString());
    }
    else if(closeBrackets.includes(splitArr[i])
      && stack.peek() === openBrackets[closeBrackets.indexOf(splitArr[i])]) {
      stack.pop();
      console.log('popped', stack.toString());
    } else {
      return false;
    }
  }
  return stack.peek() === 'Stack is empty';
};
