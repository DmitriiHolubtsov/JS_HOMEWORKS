class View {
  constructor() {
    this.albumListContainer = document.getElementById('albumList');
    this.photoListContainer = document.getElementById('photoList');
    console.log('View initialized');
    console.log('Album List Container:', this.albumListContainer);
    console.log('Photo List Container:', this.photoListContainer);
  }

  // Display a list of albums
  displayAlbums(albums) {
    if (this.albumListContainer) {
      this.albumListContainer.innerHTML = '';
      albums.forEach((album) => {
        const albumElement = document.createElement('div');
        albumElement.className = 'album';
        albumElement.innerHTML = `
            <h3>${album.title}</h3>
            <button onclick="window.location.href='album.html?albumId=${album.id}'">View Photos</button>
          `;
        this.albumListContainer.appendChild(albumElement);
      });
    }
  }

  // Display a list of photos
  displayPhotos(photos) {
    if (this.photoListContainer) {
      this.photoListContainer.innerHTML = '';
      photos.forEach((photo) => {
        const photoElement = document.createElement('div');
        photoElement.className = 'photo';
        photoElement.innerHTML = `
            <h3>${photo.title}</h3>
            <img src="${photo.thumbnailUrl}" alt="${photo.title}">
          `;
        this.photoListContainer.appendChild(photoElement);
      });
    } else {
      console.error('Photo list container not found');
    }
  }
}
