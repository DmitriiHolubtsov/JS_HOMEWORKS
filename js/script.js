'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];

// indexOf
const findIndexOf = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return false;
};
console.log(findIndexOf(arr, 7));

// lastIndexOf
const findLastIndex = function (arr, lastValue) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === lastValue) {
      return i;
    }
  }
  return -1;
};
console.log(findLastIndex(arr, 2));

// find
const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

const findResult = find(arr, function (value) {
  return value % 2 === 0;
});
console.log(findResult);

// findIndex
const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

const findIndexResult = findIndex(arr, function (value) {
  return value > 25;
});
console.log(findIndexResult);

// includes
const includesFunc = function (arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true;
    }
  }
  return false;
};
console.log(includesFunc(arr, 10));

// every
const everyFunc = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const everyResult = everyFunc(arr, function (value) {
  return value > 0;
});
console.log(everyResult);

// some
const someFunc = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const someResult = someFunc(arr, function (value) {
  return value < 1;
});
console.log(someResult);

// reduce
const reduceFunc = function(arr, callback, value) {
  let accumulator = value;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && value === undefined) {
      accumulator = arr[i];
    } else {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
};

const reduceResult = reduceFunc(arr, function (accumulator, value) {
  return accumulator + value;
});
console.log(reduceResult);
