'use strict';

const Shelter = require('./fifo-animal-shelter')

describe('Animal Shelter', () => {

  it('should instantiate an empty shelter', () => {
    let testShelter = new Shelter();
    expect(testShelter.toString()).toBe('')
  })

  it('should add in only cats and dogs', () => {
    let testShelter = new Shelter();
    testShelter.enqueue('cat');
    testShelter.enqueue('dog');
    expect(testShelter.toString()).toBe('cat, dog')
    expect(testShelter.enqueue('panda')).toBe('We only accept cat or dog')
  })

  it('should remove the preffered animal', () => {
    let testShelter = new Shelter();
    testShelter.enqueue('cat');
    testShelter.enqueue('dog');
    expect(testShelter.dequeue('cat')).toBe('cat');
    expect(testShelter.toString()).toBe('dog');
    expect(testShelter.dequeue()).toBe('dog');
    expect(testShelter.toString()).toBe('');
    expect(testShelter.dequeue()).toBe("Can't remove from empty queue")
  })

})