'use strict';

let sumOfNumbers = 0;
loop: for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        continue loop;
    }
    sumOfNumbers += i;
}
console.log('Result', sumOfNumbers);
