(function () {
  const bodyEl = document.body;

  const generateList = function (array) {
    const ulElement = document.createElement('ul');

    array.forEach((item) => {
      const liElement = document.createElement('li');

      if (Array.isArray(item)) {
        const subList = generateList(item);
        liElement.appendChild(subList);
      } else {
        liElement.textContent = item;
      }
      ulElement.appendChild(liElement);
    });

    return ulElement;
  };

  const myArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]];

  const result = generateList(myArray);

  bodyEl.appendChild(result);
}());
