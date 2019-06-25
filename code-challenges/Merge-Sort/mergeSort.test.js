'use strict';

const mergeSort = require('./mergeSort');

describe('Merge Sort', () => {

  it('Sorts an array from smallest to greatest', () => {
    let result = mergeSort([8,16,3,4,2]);
    expect(result).toEqual([2,3,4,8,16]);
  });

  it('returns empty array if given an empty array', () => {
    let result = mergeSort([]);
    expect(result).toEqual([]);
  });

});
