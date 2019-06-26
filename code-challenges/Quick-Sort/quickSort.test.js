'use strict';

const quickSort = require('./quickSort');

describe('Quick Sort', () => {
  it('returns empty array if given empty array', () => {
    let arr = [];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([]);
  });

  it('returns sorted array given even array length', () => {
    let arr = [3,5,9,1,4,7];
    quickSort(arr, 0, 5);
    expect(arr).toEqual([1,3,4,5,7,9]);
  });

  it('returns sorted array given odd array length', () => {
    let arr = [10,3,5,9,1,4,7];
    quickSort(arr, 0, 6);
    expect(arr).toEqual([1,3,4,5,7,9,10]);
  });

});
