'use strcit';

function fizzBuzzify(val) {
  if(val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz';
  } else if(val % 5 === 0) {
    return 'Buzz';
  } else if(val % 3 === 0) {
    return 'Fizz';
  } else {
    return val;
  }
}

function fizzBuzzTree(tree) {
  if(tree.root === null) {
    fizzBuzzNode(tree.root);
  }
  function fizzBuzzNode(node) {
    if(node === null) {
      return null;
    }
    node.value = fizzBuzzify(node.value);
    fizzBuzzNode(node.left);
    fizzBuzzNode(node.right);
  }
}

module.exports = {
  fizzBuzzTree,
  fizzBuzzify
};
