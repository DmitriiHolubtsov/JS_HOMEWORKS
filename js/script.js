const person = { name: 'Vova' };

function myBind(newFunction, context) {
  return function (...args) {
    const boundContext = Object.assign({}, context);
    boundContext.newFunction = newFunction;
    return boundContext.newFunction(...args);
  };
}

function greet() {
  return `Hello, ${this.name}!`;
}

const boundGreet = myBind(greet, person);
console.log(boundGreet());
