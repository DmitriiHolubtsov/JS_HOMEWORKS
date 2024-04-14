const flattenArr = (arr) => {
  if (!Array.isArray(arr) || arr.length !== 1 || !Array.isArray(arr[0])) {
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided',
    );
  }

  const result = [];

  const flattenHelper = (subArr) => {
    for (let i = 0; i < subArr.length; i++) {
      if (Array.isArray(subArr[i])) {
        flattenHelper(subArr[i]);
      } else {
        result.push(subArr[i]);
      }
    }
  };

  flattenHelper(arr[0]);
  return result;
};

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flatArrayResult = flattenArr(complexArray);
console.log(flatArrayResult);

const simpleArr = [1, 2, 3, 4];
const copiedArr = flattenArr([simpleArr.slice()]);
console.log(copiedArr);
