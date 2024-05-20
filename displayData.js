(function () {
  const dataList = document.getElementById('dataList');
  const noDataMessage = document.getElementById('noDataMessage');

  const formDataJson = localStorage.getItem('formData');

  if (formDataJson) {
    const formData = JSON.parse(formDataJson);

    if (Object.keys(formData).length > 0) {
      let hasValidData = false;

      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          const value = formData[key];
          if (typeof value === 'string' && value.trim() !== "") {
            hasValidData = true;
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${value}`;
            dataList.appendChild(listItem);
          }
        }
      }

      if (!hasValidData) {
        noDataMessage.style.display = 'block';
      }
    } else {
      noDataMessage.style.display = 'block';
    }
  } else {
    noDataMessage.style.display = 'block';
  }
}());