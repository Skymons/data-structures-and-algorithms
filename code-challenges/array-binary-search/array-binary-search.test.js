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
    it('Should find the selected value in a small array', () => {
        let arr = [1,2,3,4,5]
        expect(binarySearch(arr, 2)).toBe(1);
    });
    it('should find the value in an array of 100', () => {
      let arr = [];
        for(let i = 0; i < 101; i++){
          arr.push(i);
      }
      expect(binarySearch(arr, 73)).toBe(73);
    });
    it('should find the value in an array of 1000', () => {
      let arr = [];
        for(let i = 0; i < 1001; i++){
          arr.push(i);
      }
      expect(binarySearch(arr, 862)).toBe(862);
    });
    it('should find the value in an array of 10000', () => {
      let arr = [];
        for(let i = 0; i < 10001; i++){
          arr.push(i);
      }
      expect(binarySearch(arr, 1004)).toBe(1004);
    });
    it('should find the value in an array of 1000000', () => {
      let arr = [];
        for(let i = 0; i < 1000001; i++){
          arr.push(i);
      }
      expect(binarySearch(arr, 1000000)).toBe(1000000);
    });
});