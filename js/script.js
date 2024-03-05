'use strict';

const firstNumber = +prompt("Enter first number?");
const secondNumber = +prompt("Enter second number?");
const thirdNumber = +prompt("Enter third number?");

if(!isNaN(firstNumber && secondNumber && thirdNumber)) {
    alert(`${(firstNumber + secondNumber + thirdNumber) / 3} `);
} else (
    alert("Enter valid value!")
)
