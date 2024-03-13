'use strict';

// Task 1
const arr = [1, 2, 3, 4, 5];

let result = 0;
for (let i = 0; i < arr.length; i++){
    result += arr[i];
}
console.log(`Task - 1\n` + result);

// Task 2
let mathSum = 0;
for(let i = 0; i < arr.length; i++){
    mathSum += arr[i] * arr[i];
}
console.log(`Task - 2\n` + mathSum);
