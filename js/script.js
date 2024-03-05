'use strict';

const firstNumber = +prompt("Please enter first number?");
const secondNumber = +prompt("Please enter second number? ");

if(!isNaN(firstNumber && secondNumber)) {
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}\n`);
} else {
    alert("Error. Please enter a valid value!");
}
