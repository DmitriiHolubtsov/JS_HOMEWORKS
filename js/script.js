// indexOf
const arr1 = [2, 5, 9];
const indexOfFunc = function (value) {
  for (let i = 0; i < arr1.length; i++) {
    if (value === arr1[i]) {
      return i;
    }
  }
  return -1;
};

const indexOfFuncResult = indexOfFunc(9);
console.log(indexOfFuncResult);

// lastIndexOf
const arr2 = [1, 1, 2, 3, 4, 2, 5];
const lastIndexOfFunc = function (value) {
  for (let i = arr2.length - 1; i >= 0; i--) {
    if (value === arr2[i]) {
      return i;
    }
  }
  return -1;
};

const lastIndexOfFuncResult = lastIndexOfFunc(2);
console.log(lastIndexOfFuncResult);

// includes
const arr3 = [9, 30, 100, 24, 32];
const includesFunc = function (value) {
  for (let i = 0; i < arr3.length; i++) {
    if (value === arr3[i]) {
      return true;
    }
  }
  return false;
};

const includesFuncResult = includesFunc(9);
console.log(includesFuncResult);

// some
const arr4 = [1, 2, 3, 4, 5];
const someFunc = function (arr4, callback) {
  for (let i = 0; i < arr4.length; i++) {
    if (callback(arr4[i], i, arr4)) {
      return true;
    }
  }
  return false;
};

const someResult = someFunc(arr4, function (value) {
  return value > 1;
});

console.log(someResult);

// exporting functions for tests
const exportFunctions = {
  indexOfFunc,
  lastIndexOfFunc,
  includesFunc,
  someFunc,
};

export default exportFunctions;
