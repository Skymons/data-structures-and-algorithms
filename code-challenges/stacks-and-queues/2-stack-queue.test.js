"use strict";

const TwoStackQueue = require("./2-stack-queue");

describe("Queue", () => {
  let testQueue = new TwoStackQueue();

  it("should be empty upon instantiation", () => {
    expect(testQueue.s1.top).toBeNull();
  });

  it("peek should look at the front node", () => {
    expect(testQueue.s1.peek()).toBe("Stack is empty");
  });

  it("enqueue should add new nodes to the end of the queue", () => {
    testQueue.enqueue(5);
    testQueue.enqueue(6);
    testQueue.enqueue(7);
    testQueue.enqueue(8);
    testQueue.enqueue(9);

    expect(testQueue.s1.top.value).toBe(9);
  });

  it("dequeue should remove the front node from the queue and return the value", () => {
    expect(testQueue.dequeue()).toBe(5);
    expect(testQueue.dequeue()).toBe(6);
    expect(testQueue.dequeue()).toBe(7);
    expect(testQueue.dequeue()).toBe(8);
    expect(testQueue.dequeue()).toBe(9);
    expect(testQueue.dequeue()).toBe("The queue is empty!");
  });
}); 