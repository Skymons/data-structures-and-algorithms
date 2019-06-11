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
    return null;
  } else if (tree.left !== null) {
    tree.root.value = fizzBuzzify(tree.value);
    fizzBuzzTree(tree.left);
  } else if (tree.right !== null) {
    tree.value = fizzBuzzify(tree.value);
    fizzBuzzTree(tree.right);
  }
}

module.exports = {
  fizzBuzzTree,
  fizzBuzzify
};
