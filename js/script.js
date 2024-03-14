'use strict';

const number = +prompt('Enter your number?');
const raisedNumber = +prompt('Enter the degree to which your number must be raised?');

const generateResult = function calcNumber(number, raisedNumber = 1) {
    if(!isNaN(number) && !isNaN(raisedNumber)) {
        const result = number ** raisedNumber;
        return result;
    } else {
        return 'Your value is not a number!';
    }
}

console.log(generateResult(number, raisedNumber));

