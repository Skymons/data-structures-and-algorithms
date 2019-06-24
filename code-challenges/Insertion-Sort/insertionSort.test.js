'use strict';

const insertionSort = require('./insertionSort');

describe('Insertion Sort', () => {

  it('Sorts an array from smallest to greatest', () => {
    let result = insertionSort([8,16,3,4,2]);
    expect(result).toEqual([2,3,4,8,16]);
  });

  it('returns empty array if given an empty array', () => {
    let result = insertionSort([]);
    expect(result).toEqual([]);
  });

});
