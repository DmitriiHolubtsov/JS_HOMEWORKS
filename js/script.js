// Pseudo apply function
const person = {
    name: 'Tim'
}

function myApply(someFunction, context, args) {
    return someFunction(args);
}

function greetings(name) {
    return `Hello, ${name}!`;
}

const greeting = myApply(greetings, person, ['Ann']);
console.log(greeting);
