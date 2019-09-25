'use strict';

const intersectCheck = require('./tree-intersection')
const Tree = require('../tree/tree');

let tree1 = new Tree;
tree1.insert(0);
tree1.insert(1);
tree1.insert(2);
tree1.insert(3);
tree1.insert(5);
tree1.insert(8);
let tree2 = new Tree;
tree2.insert(5);
tree2.insert(1);
tree2.insert(9);
tree2.insert(14);
tree2.insert(7);
tree2.insert(8);
tree2.insert(4);
tree2.insert(0);
let tree3 = new Tree;
tree3.insert(1);
tree3.insert(13);
tree3.insert(19);
tree3.insert(34);
tree3.insert(0);
tree3.insert(45);
tree3.insert(76);
tree3.insert(3);

describe('tree intersections', () => {

  it('should return the repeated values between the two trees', () => {
    expect(intersectCheck(tree1, tree2)).toEqual([0, 1, 5, 8]);
    expect(intersectCheck(tree1, tree3)).toEqual([0, 1, 3]);
    expect(intersectCheck(tree2, tree3)).toEqual([0, 1]);
  })

})