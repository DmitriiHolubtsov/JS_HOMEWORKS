'use strict';

const arr =  [1, 2, 3, -1, -2, -3];

const arrayNumbers = function findNumbers(arr) {
    const exampleArr = [];
    if(arr.length === 0) {
        return 'empty';
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 0 )
            exampleArr.push(arr[i]);
        }
    }
    if (exampleArr.length === 0) {
        return null;
    }
    return exampleArr;
}

console.log(arrayNumbers(arr));
