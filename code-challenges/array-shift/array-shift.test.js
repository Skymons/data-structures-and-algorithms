'use strict';

const middleInsert = function(arr, value) {
    if(Array.isArray(arr)) {
        let middleIndex = Math.ceil(arr.length/2);
        const stopPoint = arr.length - middleIndex;
        let newArr = [];
        for(let i = 0; i < middleIndex; i++) {
          newArr[i] = arr[i]
        }
        newArr[middleIndex] = value;
        for(let i = middleIndex; i < arr.length; i++) {
          newArr[i+1] = arr[i];
        }
        return newArr;
    } else {
        return null;
    }
}

describe('Array shift', () => {
    it('should insert value into middle of array', () => {
        const arr = [1,2,3,4]
        expect(middleInsert(arr, 47)).toEqual([1,2,47,3,4])
    })
    it('should return to right of middle value if array is odd length', () => {
        const arr = [1,2,3,4,5]
        expect(middleInsert(arr, 98)).toEqual([1,2,3,98,4,5])
    })
    it('should return null if there is no array', () => {
        expect(middleInsert(7,9)).toEqual(null);
    })
    it('should return string into middle of array', () => {
        const arr = ['hi','my','is','skylar']
        expect(middleInsert(arr, 'name')).toEqual(['hi','my','name','is','skylar'])
    })
})