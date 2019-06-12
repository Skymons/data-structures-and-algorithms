'use strict';

const Tree = require('./tree');

let seed = new Tree();

describe('methods of a tree', () => {

  it('Can create a new tree', () => {
    seed.insert(1);
    seed.insert(2);
    seed.insert(3);
    seed.insert(1234);
    seed.insert(0);
    expect(seed).toBeDefined();
    expect(seed.root.value).toBe(1);
    expect(seed.root.left.value).toBe(0);
    expect(seed.root.left.left).toBe(null);
    expect(seed.root.right.value).toBe(2);
    expect(seed.root.right.right.value).toBe(3);
    expect(seed.root.right.right.right.value).toBe(1234);
  });

  it('Can traverse in order', () => {
    expect(seed.inorder(seed.root)).toEqual([0,1,2,3,1234]);
    expect(seed.inorder(seed.root)).toEqual([0,1,2,3,1234]);
  });

  it('Can traverse pre order', () => {
    expect(seed.preorder(seed.root)).toEqual([1,0,2,3,1234]);

    var tree2 = new Tree;
    tree2.insert('x');
    expect(tree2.preorder(tree2.root)).toEqual(['x']);
  });

  it('Can traverse post order', () => {
    expect(seed.postorder(seed.root)).toEqual([0,1234,3,2,1]);
    //expect(seed.postorder(seed.root)).toEqual([0,1234,3,2,1]);
  });

  it('Can traverse breadth first', () => {
    expect(seed.breadthFirst()).toEqual([1,0,2,3,1234]);
  });

  it('return null if tree is empty doing breadth first traversal', () => {
    let sapling = new Tree();
    expect(sapling.breadthFirst()).toEqual(null);
  });

  it('Return max node value', () => {
    let babySapling = new Tree();
    expect(babySapling.findMaxNode(babySapling.root)).toEqual(null);
  });

  it('Return max node value', () => {
    expect(seed.findMaxNode(seed.root).value).toEqual(1234);
  });
});
