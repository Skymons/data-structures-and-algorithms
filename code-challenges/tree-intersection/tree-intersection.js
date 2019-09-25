'use strict';

let Tree = require('../tree/tree')

module.exports = (tree1, tree2) => {
  let checker = new Set;
  let resArr = [];
  let first = tree1.inorder();
  let second = tree2.inorder();
  first.forEach(val => {
    checker.add(val);
  });
  second.forEach(val => {
    if(checker.has(val)) {
      resArr.push(val);
    }
  })
  return resArr;
}