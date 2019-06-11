'use strcit';

const fizzBuzz = require('./fizzBuzzTree');
const Seed = require('../tree/tree');

describe('changing values in a tree', () => {
  describe.each([
    [1,1],
    [2,2],
    [3,'Fizz'],
    [4,4],
    [5,'Buzz'],
    [6,'Fizz'],
    [7,7],
    [8,8],
    [9,'Fizz'],
    [10,'Buzz'],
    [11,11],
    [12,'Fizz'],
    [13,13],
    [14,14],
    [15,'FizzBuzz'],
    [16,16],
    [17,17],
    [18,'Fizz'],
    [19,19],
    [30,'FizzBuzz'],
  ])(`%s`, (value, expected) => {
    it('is ' + expected, () => {
      let result = fizzBuzz.fizzBuzzify(value);
      expect(result).toBe(expected);
    });
  });

  it('Can traverse through a tree and fizzBuzz it', () => {
    let tree = new Seed;
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.insert(15);
    tree.insert(120);
    fizzBuzz.fizzBuzzTree(tree); 
  });
});
