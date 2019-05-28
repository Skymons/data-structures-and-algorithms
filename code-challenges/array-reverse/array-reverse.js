'use strict';



const reverseArr = function(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr[newArr.length] = arr[arr.length - i - 1];
  }
  return newArr;
};

console.log(reverseArr([1,2,3,4,5,6]));
