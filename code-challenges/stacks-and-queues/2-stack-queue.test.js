'use strict';

let TwoStackQueue = require('./2-stack-queue');

describe('Queue made of 2 stacks', () => {

  it('should create an empty queue', () => {
    let emptyQueue = new TwoStackQueue();
    expect(emptyQueue).toBe('');
  })

  it('should enqueue values to the end of the queue', () => {
    let firstQueue = new TwoStackQueue();
    firstQueue.enqueue(1);
    firstQueue.enqueue(2);
    firstQueue.enqueue(3);
    firstQueue.enqueue(4);
    expect(firstQueue).toBe('1,2,3,4')
  })

  it('should dequeue the first item in the queue', () => {
    let secondQueue = new TwoStackQueue();
    secondQueue.enqueue(5);
    secondQueue.enqueue(6);
    secondQueue.enqueue(7);
    secondQueue.enqueue(8);
    expect(secondQueue.toString()).toBe('5,6,7,8')
    secondQueue.dequeue()
    expect(secondQueue.toString()).toBe('6,7,8')
    secondQueue.dequeue()
    expect(secondQueue.toString()).toBe('7,8')
    secondQueue.dequeue()
    expect(secondQueue.toString()).toBe('8')
    secondQueue.dequeue()
    expect(secondQueue.toString()).toBe('')
    expect(secondQueue.dequeue()).toBe(null)
  })

})