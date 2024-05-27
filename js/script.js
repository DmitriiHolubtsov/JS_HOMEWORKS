(function () {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

  document.querySelectorAll('.item').forEach((item) => {
    const itemId = item.dataset.id;
    const button = item.querySelector('.favoriteBtn');
    if (favorites[itemId]) {
      item.classList.add('favorite');
      button.textContent = 'Remove from favorites';
    } else {
      item.classList.remove('favorite');
      button.textContent = 'Add to favorites';
    }
    button.addEventListener('click', () => {
      if (favorites[itemId]) {
        delete favorites[itemId];
        item.classList.remove('favorite');
        button.textContent = 'Add to favorites';
      } else {
        favorites[itemId] = true;
        item.classList.add('favorite');
        button.textContent = 'Remove from favorites';
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
}());
