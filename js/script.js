'use strict';

const operationType = prompt("Enter a type of operation: add, sub, mult, div?").toLowerCase();
const firstValue = +prompt("Enter first number to calculate?");
const secondValue = +prompt("Enter second number to calculate?");

if(!isNaN(firstValue && secondValue) && operationType) {
    if(operationType === 'add') {
        alert(`Result: ${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
    } else if (operationType === 'sub') {
        alert(`Result: ${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
    } else if (operationType === 'mult') {
        alert(`Result: ${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
    } else if (operationType === 'div') {
        alert(`Result: ${firstValue} : ${secondValue} = ${firstValue / secondValue}`);
    } else {
        alert("You have entered a wrong type of operation!");
    }
} else {
    alert("Please check if all information is correct and try again.");
}
