'use strict';

// #6 Numbers and strings

// #1
let firstString = prompt("Please, enter first string?");
let secondString = prompt("Please, enter second string?");
let thirdString = prompt("Please, enter third string?");
alert(firstString + " " + secondString + " " + thirdString);

//#2
let number = 54321;
let arrayOfNumbers = ("" +number).split("").map(Number).join(' ');
alert(arrayOfNumbers);
