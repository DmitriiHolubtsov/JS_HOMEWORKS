(function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const formObjectJson = JSON.stringify(formObject);

    localStorage.setItem('formData', formObjectJson);

    window.location.href = './displayFormData.html';
  });
}());
