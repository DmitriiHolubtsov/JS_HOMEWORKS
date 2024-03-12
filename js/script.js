'use strict';

// Task 1
let result = ``;
for(let i = 10; i <= 20; i++) {
    result += i;
    if(i < 20) {
        result += `, `;
    }
}
console.log('Task - 1\n', result);

// Task 2
let square = ``;
for(let i = 10; i <= 20; i++) {
    square += i * i;
    if(i < 20) {
        square += ` `;
    }
}
console.log('Task - 2\n', square);

// Task 3
let multiplicationTable = ``;
for(let i = 1; i <= 10; i++) {
    multiplicationTable += `7 * ${i} = ${i * 7}\n`;
}
console.log('Task - 3\n', multiplicationTable);

// Task 4
let increment = ``;
for(let i = 1; i <= 15; i++) {
    increment += i + i;
    if(i < 15) {
        increment += ` `;
    }
}
console.log('Task - 4\n', increment);

// Task 5
let multiplication = ``;
for(let i = 15; i <= 35; i++){
    multiplication += i * i;
    if(i < 35) {
        multiplication += ` `;
    }
}
console.log('Task - 5\n', multiplication);

// Task - 6
let arithmeticNum = 0;
for(let i = 1; i <= 500; i++) {
    arithmeticNum += i;
}
const arithmeticMean = arithmeticNum / (500 - 1 + 1);
console.log('Task - 6\n', arithmeticMean);

// Task - 7
let evenNumber = 0;
for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        evenNumber += i;
    }
}
console.log('Task - 7\n', evenNumber);

// Task - 8
const allByThree = [];
for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        allByThree.push(i);
    }
}
console.log('Task - 8\n', allByThree);

// Task - 9
const num = 30;
let allNumbers = [];
for(let i = 1; i <= num; i++){
    if(num % i === 0) {
        allNumbers.push(i);
    }
}
console.log('Task - 9\n', allNumbers);

// Task - 10
let newNum = 0;
for(let i = 1; i <= num; i++) {
    if(num % i === 0 && i % 2 === 0){
        newNum++;
    }
}
console.log('Task - 10\n', newNum);

// Task - 11
let newNumSum = 0;
for(let i = 1; i <= num; i++) {
    if(num % i === 0 && i % 2 === 0){
        newNumSum += i;
    }
}
console.log('Task - 11\n', newNumSum);

// Task 12
let bigMultiplicationTable = ``;
for(let i = 1; i <= 10; i++){
    for(let b = 1; b <= 10; b++){
        bigMultiplicationTable += `${i} * ${b} = ${i * b}\n`;
    }
}
console.log('Task - 12\n', bigMultiplicationTable);
