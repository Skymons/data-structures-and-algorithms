'use strict';

module.exports = function mergeSort(arr) {
  let n = arr.length;
  if(n <= 1) {
    return arr;
  }
  let mid = Math.floor(n/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log(left, right, arr);
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let arr = [];
  let i = 0;
  let j =0;
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr.push(left[i]);
      i = i + 1;
    } else {
      arr.push(right[j]);
      j = j + 1;
    }
  }
  for(let o = j; o < right.length; o++) {
    arr.push(right[o]);
  }

  for(let o = i; o < left.length; o++) {
    arr.push(left[o]);
  }
  return arr;
}
