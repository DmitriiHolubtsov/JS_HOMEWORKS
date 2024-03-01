'use strict';

const firstOperand = +prompt("Please, enter first number to calculate?");
const secondOperand = +prompt("Please, enter second number to calculate?");

if(!isNaN(firstOperand && secondOperand)) {
    if(firstOperand && secondOperand) {
        console.log(`Result: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
        console.log(`Result: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
        console.log(`Result: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
        console.log(`Result: ${firstOperand} : ${secondOperand} = ${firstOperand / secondOperand}`);
    } else {
        alert("No value entered!")
    }
} else {
    alert("You value is not a number!");
}
