'use strict';

// Task 1
const letters = ['a', 'b', 'c', 'd'];
console.log(`Task 1. Result: ${letters[0]} + ${letters[1]}, ${letters[2]} + ${letters[3]}`);

// Task 2
const numbers = [2, 5, 3, 9];
const result = numbers[0] * numbers[1] + numbers[2] * numbers[3];
console.log('Task 2. Result:', result);

// Task 3
const subArr =  [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log('Task 3. Result:', subArr[1][0]);

// Task 4
const myObject = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
console.log('Task 4. Result:', myObject.js[0]);

// Task 5
const newArr = [];
for(let i = 1; i <= 10; i++){
    newArr.push('x'.repeat(i));
}
console.log('Task 5. Result:', newArr);

// Task 6
const newNumbersArr = [];
for(let i = 1; i <= 5; i++){
    newNumbersArr.push(`${i}`.repeat(i));
}
console.log('Task 6. Result:', newNumbersArr);

// Task 7
const myArr = [];
const arrayFunc = function arrayFill(el, num) {
    for(let i = 0; i < num; i++) {
        myArr.push(el);
    }
}
arrayFunc('x', 5);
console.log('Task 7. Result:', myArr);

// Task 8
const arrWithNumbers = [1, 3, 2, 4, 1, 2, 5, 7];
let concatResult = 0;
let numbersCount = [];
for(let i = 0; i < arrWithNumbers.length; i++) {
    if(concatResult < 10) {
        concatResult += arrWithNumbers[i];
        numbersCount++;
    }
    if(concatResult > 10) {
        break;
    }
}
console.log('Task 8. Result:', numbersCount, concatResult);

// Task 9
const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArr = function reverseMyArr(someArray) {
    for(let i = 0; i < Math.floor(someArray.length / 2); i++) {
        let currentElementValue = someArray[i];
        someArray[i] = someArray[someArray.length - 1 - i];
        someArray[someArray.length - 1 - i] = currentElementValue;
    }
}
reverseArr(someArr);
console.log('Task 9. Result:', someArr);

// Task 10
const deepArr = [ [1, 2, 3], [4, 7, 8, 5], [6] ];
let sumOfAllArrays = 0;
for(let i = 0; i < deepArr.length; i++) {
    for(let b = 0; b < deepArr[i].length; b++) {
        sumOfAllArrays += deepArr[i][b];
    }
}
console.log('Task 10. Result:', sumOfAllArrays);

// Task 11
const veryDeepArr = [ [ [1, 2], [3, 4] ], [ [5, 6], [7, 8] ] ];
let sumOfVeryDeepArr = 0;
for(let i = 0; i < veryDeepArr.length; i++) {
    for(let b = 0; b < veryDeepArr[i].length; b++) {
        for(let c = 0; c < veryDeepArr[b].length; c++) {
            sumOfVeryDeepArr += veryDeepArr[i][b][c];
        }
    }
}
console.log('Task 11. Result:', sumOfVeryDeepArr);
