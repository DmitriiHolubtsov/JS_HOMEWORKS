const getSum = function () {
  let num = 0;
  return function (a) {
    num += a;
    return num;
  };
};

const sum = getSum();

console.log(sum(3));
console.log(sum(10));
console.log(sum(10));
