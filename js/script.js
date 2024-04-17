// Task 1
const getFactorial = (num) => {
  return num === 0 || num === 1 ? 1 : num * getFactorial(num - 1);
};
console.log(getFactorial(3));

// Task 2
const numToPower = (num, degree) => {
  switch (true) {
    case degree === 1:
    case degree === 0:
      return num;
    case degree > 1:
      return num * numToPower(num, degree - 1);
    case degree < 0:
      return 1 / numToPower(num, -degree);
    default:
      return NaN;
  }
};
console.log(numToPower(5, 2));

// Task 3
const mathNum = (a, b) => {
  return b === 0 ? a : mathNum(++a, --b);
};
console.log(mathNum(10, 3));
