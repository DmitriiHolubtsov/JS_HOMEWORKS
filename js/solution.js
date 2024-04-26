(function () {
  const bodyEl = document.body;
  const bodyChilds = bodyEl.childNodes;
  const ul = bodyChilds[1];

  // Task 1
  const allUlAttributesValue = [];
  const allUlAttributeNames = [];
  for (const attribute of ul.attributes) {
    allUlAttributesValue.push(attribute.value);
    allUlAttributeNames.push(attribute.name);
  }
  console.log(allUlAttributesValue);
  // Task 2
  console.log(allUlAttributeNames);

  // Task 3
  ul.lastElementChild.textContent = 'Hello my name is Dima.';
  console.log(ul.lastElementChild);

  // Task 4
  ul.firstElementChild.setAttribute('data-my-name', 'Dima');
  console.log(ul.firstElementChild.attributes);

  //Task 5
  ul.removeAttribute('data-dog-tail');
  console.log(ul.attributes);
})();
