'use strict';

// 1
let a = 0;
console.log(`Task 1 - ${a === 0 ? 'Вірно' : 'Неправильно'}`);
// 2
a = 1;
console.log(`Task 2 - ${a > 0 ? 'Вірно' : 'Невірно'}`);
// 3
a = -1;
console.log(`Task 3 - ${a < 0 ? 'Вірно' : 'Невірно'}`);
// 4
a = 1;
console.log(`Task 4 - ${a >= 0 ? 'Вірно' : 'Неправильно'}`);
// 5
a = -1;
console.log(`Task 5 - ${a <= 0 ? 'Вірно' : 'Неправильно'}`);
// 6
a = 1;
console.log(`Task 6 - ${a !== 0 ? 'Вірно' : 'Невірно'}`);
// 7
a = 'test';
console.log(`Task 7 - ${a === 'test' ? 'Вірно' : 'Неправильно'}`);
// 8
a = '1';
console.log(`Task 8 - ${a === '1' ? 'Вірно' : 'Невірно'}`);
// 9
a = 1;
console.log(`Task 9 - ${a > 0 && a < 5 ? 'Вірно' : 'Невірно'}`);
// 10
a = 10;
alert(`Task 10 - ${a === 0 || a === 2 ? a + 7 : a / 10}`);
// 11
a = 3;
let b = 2;
alert(`Task 11 - ${a <= 1 || b >= 3 ? a + b : a - b}`);
// 12
a = 5;
b = 3;
console.log(`Task 12 - ${a > 2 && a < 11 || b >= 6 && b < 14 ? 'Вірно' : 'Невірно'}`);
// 13
const num = 1;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
        default:
            result = 'Значення не введено.'
}

console.log(`Task 13 - ${result}`);
