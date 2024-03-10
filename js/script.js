'use strict';

// Task 1
const x = 10;
const y = 7;

x > y ? console.log("x більше за y") : console.log("x не більше, ніж y");

// Task 2
const num = +prompt('Please, enter integer value?');

if(!isNaN(num)) {
    if(num <= 0) {
        const negativeNum = num.toString().slice(1);
        alert(`Your value has ${negativeNum.length} digits.\nYour value is negative.`);
    } else {
        alert(`Your value has ${num.toString().length} digits.\nYour value is positive.`);
    }
} else {
    alert('Your value is not a number.');
}

// Task 3
const firstNum = +prompt("Enter first number?");
const secondNum = +prompt("Enter second number?");
const thirdNum = +prompt("Enter third number?");

if(!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
    if(firstNum >= secondNum && firstNum >= thirdNum) {
        alert(`${firstNum} is a biggest number!`);
    } else if(secondNum >= firstNum && secondNum >= thirdNum) {
        alert(`${secondNum} is a biggest number!`);
    } else if(thirdNum >= firstNum && thirdNum >= secondNum) {
        alert(`${thirdNum} is a biggest number!`);
    }
} else {
    alert("Your value is not a number!");
}

// Task 4
const sideA = +prompt("Hello! Let's create a triangle!\nEnter a first length of Side A.");
const sideB = +prompt("Enter a second length of Side B.");
const sideC = +prompt("Enter a third length of Side C.");

if(!isNaN(+sideA) && !isNaN(+sideB) && !isNaN(+sideC)) {
    if(sideA && sideB > sideC) {
        console.log(`A and B > C : ${sideA} ${sideB} ${sideC}`);
        alert(`You have entered valid length of all 3 sides of your triangle! All is ok!`);
    } else if(sideB && sideC > sideA){
        console.log(`B and C > A : ${sideA} ${sideB} ${sideC}`);
        alert(`You have entered valid length of all 3 sides of your triangle! All is ok!`);
    } else if (sideC && sideA > sideB) {
        console.log(`C and A > C : ${sideA} ${sideB} ${sideC}`);
        alert(`You have entered valid length of all 3 sides of your triangle! All is ok!`);
    } else {
        console.log(`not valid ${sideA} ${sideB} ${sideC}`)
        alert(`You have not entered valid length of sides. Your triangle is not right!`);
    }
} else {
    alert("One of your values is not a number! Please try again!");
}
