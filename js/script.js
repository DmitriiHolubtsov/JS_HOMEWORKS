'use strict';

// Task 1
const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;
console.log(user);

//Task 2
const user1 = {
    name: 'John'
};
user1.name = 'Pete';
/*
The const declaration only protects the variable itself from changes.
user1 stores a reference to an object. And this cannot be changed.
But the contents of the object can be changed.
*/
console.log(user1);

// Task 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

