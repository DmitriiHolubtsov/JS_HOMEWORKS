// Task 1
const getFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * getFactorial(num - 1);
  }
};
console.log(getFactorial(3));

// Task 2
const numToPower = (num, degree) => {
  if (degree === 1) {
    return num;
  } else if (degree === 0) {
    return num;
  } else if (degree > 1) {
    return num * numToPower(num, degree - 1);
  } else if (degree < 0) {
    return 1 / numToPower(num, -degree);
  }
};
console.log(numToPower(5, 2));

// Task 3
const mathNum = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return mathNum(++a, --b);
  }
};
console.log(mathNum(10, 3));
