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
  } else if (tree.root.left !== null) {
    tree.root.value = fizzBuzzify(tree.root.value);
    fizzBuzzTree(tree.root.left);
  } else if (tree.root.right !== null) {
    tree.root.value = fizzBuzzify(tree.root.value);
    fizzBuzzTree(tree.root.right);
  }
}

module.exports = {
  fizzBuzzTree,
  fizzBuzzify
};
