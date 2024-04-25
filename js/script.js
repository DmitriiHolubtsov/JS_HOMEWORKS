(function () {

  const getSum = function (value) {
    let num = value;
    return function (number) {
      num += number;
      return num;
    };
  };

  const sum = getSum(10);

  console.log(sum(3));
  console.log(sum(10));
  console.log(sum(10));

})();






