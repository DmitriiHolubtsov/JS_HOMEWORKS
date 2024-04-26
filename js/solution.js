(function () {
  const bodyEl = document.body;
  const bodyChilds = bodyEl.childNodes;
  const ul = bodyChilds[1].childNodes;

  // Task 1 - display every element of list in console
  for (const element of ul) {
    if (element instanceof HTMLElement) {
      console.log(element);
    }
  }

  // Task 2 - display count of all elements in console
  let count = 0;
  for (const element of ul) {
    if (element instanceof HTMLElement) {
      count++;
    }
  }
  console.log(count);

  // Task 3 - take text from all elements and create array with them, show in console
  const array = [];
  for (const textElemnt of ul) {
    if (textElemnt instanceof HTMLElement) {
      array.push(textElemnt.textContent);
    }
  }
  console.log(array);
})();
