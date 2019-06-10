'use strict';

const { Stack } = require('../stacks-and-queues/stacks-and-queues');

module.exports = function bracketValidation(str) {
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
};
