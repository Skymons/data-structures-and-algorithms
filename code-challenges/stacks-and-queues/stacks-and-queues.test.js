'use stricts';

let StackAndQueue = require('./stacks-and-queues');

describe('Stack', () => {

  it('should create a new stack', () => {
    let emptyList = new StackAndQueue.Stack();
    expect(emptyList.toString()).toBe('');
  });

  it('should add nodes to the start of the stack', () => {
    let emptyList = new StackAndQueue.Stack();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    expect(emptyList.toString()).toBe('3,2,1');
  });

  it('should remove top item on the stack', () => {
    let emptyList = new StackAndQueue.Stack();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    expect(emptyList.pop()).toBe(3);
    expect(emptyList.pop()).toBe(2);
    expect(emptyList.pop()).toBe(1);
    expect(emptyList.pop()).toBe(`Can't pop from empty stack`);
    expect(emptyList).toEqual({top: null});
  });

  it('should return the first value in the stack', () => {
    let emptyList = new StackAndQueue.Stack();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    expect(emptyList.peek()).toBe(3);
    emptyList.pop();
    expect(emptyList.peek()).toBe(2);
    emptyList.pop();
    expect(emptyList.peek()).toBe(1);
    emptyList.pop();
    expect(emptyList.peek()).toBe(`Stack is empty`);
  });
});

describe('Queue', () => {

  it('should create a new queue', () => {
    let emptyList = new StackAndQueue.Queue();
    expect(emptyList.toString()).toBe('');
  });

  it('should add nodes to the end of the queue', () => {
    let emptyList = new StackAndQueue.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.toString()).toBe('1,2,3');
  });

  it('should remove a node from the beginning of the queue', () => {
    let emptyList = new StackAndQueue.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.dequeue()).toBe(1);
    expect(emptyList.dequeue()).toBe(2);
    expect(emptyList.dequeue()).toBe(3);
    expect(emptyList.dequeue()).toBe(`Can't remove from empty queue`);
  });

  it('should return the first value in the queue', () => {
    let emptyList = new StackAndQueue.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.peek()).toBe(1);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(2);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(3);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(`Stack is empty`);
  });

});
