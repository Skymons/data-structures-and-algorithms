'use strict';
  
    function binarySearch(arr, value) {
      let start = 0;
      let end = arr.length - 1;
      let mid;
    
      while(start < end) {
          mid = Math.floor((end + start) / 2);
          if(arr[arr.length-1] === value) {
            return arr.length -1;
          }
          if(arr[mid] === value){
            return mid;
          } else if (value > arr[mid]){
            start = mid + 1;
          } else {
            end = mid;
          }
        }
        return -1
      }

describe('Binary Search', () => {
    it('Should fnd the selected value in the array', () => {
        let arr = [1,2,3,4,5]
        expect(binarySearch(arr, 2)).toBe(1);
    });
});