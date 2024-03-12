'use strict';

// Task 1
let numResult = ``;
for(let i = 20; i <= 30; i += 0.5){
    numResult += i + `, `;
}
console.log('Task - 1\n', numResult);

// Task 2
const usdCurrency = 27;
let usdConverted = ``;
for(let i = 1; i <= 10; i++){
    usdConverted += `${usdCurrency} * ${i * 10} = ${usdCurrency * (i * 10)} USD\n`;
}
console.log('Task - 2\n', usdConverted);

// Task - 3
const numberN = 100;
const resultArr = []
for(let i = 1; i <=100; i++){
    const result = i * i;
    if(result <= numberN) {
        resultArr.push(i);
    } else {
        break;
    }
}
console.log('Task - 3\n', resultArr);

// Task - 4
let wholeNumber = 21;
if(wholeNumber <= 1) {
    console.log(`Task - 4\n`, wholeNumber + ` не є простим числом.`);
} else {
    for(let i = 2; i <= Math.sqrt(wholeNumber); i++){
        if(wholeNumber % i === 0) {
            console.log(`Task - 4\n`, wholeNumber + ` не є простим числом.`);
            break;
        } else if(wholeNumber % i !== 0){
            console.log(`Task - 4\n`, wholeNumber + ` є простим числом.`);
            break;
        }
    }
}

// Task - 5
let num = 81;
for(let i = 1; i < num; i++){
    if(num > 1 && num % 3 === 0) {
        num /= 3;
        console.log(`Task - 5\n`, num + ` можна одержати це число шляхом зведення числа 3 у деякий ступінь.`);
    } else {
        console.log(`Task - 5\n`, num + ` не можна одержати це число шляхом зведення числа 3 у деякий ступінь.`);
    }
}
