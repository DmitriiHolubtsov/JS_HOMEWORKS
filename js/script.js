'use strict';

// Task 1
const concatFirstArr = [1, 2, 3];
const concatSecondArr = [4, 5, 6];
const mergedArr = [].concat(concatFirstArr, concatSecondArr);
console.log('1. Merged array. Result:', mergedArr);

// Task 2
const reverseArr = [1, 2, 3];
reverseArr.reverse();
console.log('2. Reversed array. Result:', reverseArr);

//Task 3
const addItemsEnd = [1, 2, 3];
addItemsEnd.push(4, 5, 6);
console.log('3. Add items to the end of array. Result:', addItemsEnd);

// Task 4
const addItemsStart = [1, 2, 3];
addItemsStart.unshift(4, 5, 6);
console.log('4. Add items to the start of array. Result:', addItemsStart);

// Task 5
const displayFirstEl = ['js', 'css', 'jq'];
console.log('5. Display first el of arr. Result:', displayFirstEl[0]);

// Task 6
const displayLastEl = ['js', 'css', 'jq'];
console.log('6. Display last el of arr. Result:', displayLastEl.slice(-1));

// Task 7
const getFirsThreeEl = [1, 2, 3, 4, 5];
const firstThreeEl = getFirsThreeEl.slice(0, 3);
console.log('7. Display first three el of arr. Result:', firstThreeEl);

// Task 8
const getLastTwoEl = [1, 2, 3, 4, 5];
const lastTwoEl = getLastTwoEl.slice(3, 5);
console.log('8. Display last two el of arr. Result:', lastTwoEl);

// Task 9
const cutSomeEl = [1, 2, 3, 4, 5];
cutSomeEl.splice(1, 2)
console.log('9. Display some el of arr. Result:', cutSomeEl);

// Task 10
const tekeSomeEl = [1, 2, 3, 4, 5];
const newArrWithSomeEl = tekeSomeEl.splice(1, 3);
console.log('10. Take some el of arr. Result:', newArrWithSomeEl);

// Task 11
const addNewEl = [1, 2, 3, 4, 5];
addNewEl.splice(3, 0, 'a', 'b', 'c');
console.log('11. Add some el to the middle of arr. Result:', addNewEl);

// Task 12
const addElDiffPosition = [1, 2, 3, 4, 5];
addElDiffPosition.splice(1, 0, 'a', 'b');
addElDiffPosition.splice(6, 0, 'c');
addElDiffPosition.splice(8, 0, 'e');
console.log('12. Add some el to the diff position of arr. Result:', addElDiffPosition);

// Task 13
const sortArr = [3, 4, 1, 2, 7];
sortArr.sort();
console.log('13. Sort arr. Result:', sortArr);

// Task 14
const findSumOfArr = [5, 6, 7, 8, 9];
const sumOfArr = findSumOfArr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log('14. Sum of arr. Result:', sumOfArr);

// Task 15
const findSquares = [5, 6, 7, 8, 9];
const squaresOfArrEl = findSquares.map(num => num * num);
console.log('15. Squares of arr el. Result:', squaresOfArrEl);

// Task 16
const allNumbers = [1, -3, 5, 6, -7, 8, 9, -11];
const onlyNegativeNumbers = [];

for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] < 0) {
        onlyNegativeNumbers.push(allNumbers[i]);
    }
}
console.log('16. Only negative numbers. Result:', onlyNegativeNumbers);

// Task 17
const findEvenNumbers = [1,-3, 5, 6,-7, 8, 9,-11];

for(let i = 0; i < findEvenNumbers.length;) {
    if (findEvenNumbers[i] % 2 !== 0) {
        findEvenNumbers.splice(i, 1);
    } else {
        i++;
    }
}
console.log('17. Only even numbers. Result:', findEvenNumbers);

// Task 18
const arrStrings = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

for(let i = 0; i < arrStrings.length;) {
    if (arrStrings[i].length <= 5) {
        arrStrings.splice(i, 1);
    } else {
        i++;
    }
}
console.log('18. Length > 5. Result:', arrStrings);

// Task 19
const findSubArrays = [1, 2, [3, 4], 5, [6, 7]];

for (let i = findSubArrays.length - 1; i >= 0; i--) {
    if (!Array.isArray(findSubArrays[i])) {
        findSubArrays.splice(i, 1);
    }
}
console.log('19. Find only sub arrays. Result:', findSubArrays);

// Task 20

const clacNegativeNumbers = [5, -3, 6, -5, 0, -7, 8, 9];
let count = 0;

for (let i = 0; i < clacNegativeNumbers.length; i++) {
    if (clacNegativeNumbers[i] < 0) {
        count++;
    }
}
console.log('20. Count negative numbers. Result:', count);
