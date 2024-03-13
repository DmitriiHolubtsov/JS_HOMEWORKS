'use strict';

const num = parseInt(prompt('Enter your number?'));

if(isNaN(num) || num < 1) {
    console.log('NaN');
} else {
    let div = 2;
    for(; div < num; div++) {
        if(num % div === 0) {
            console.log('Minimum divisor of a number', div);
            break;
        }
    }
    if(div === num) {
        console.log('The number is prime:', num);
    }
}
