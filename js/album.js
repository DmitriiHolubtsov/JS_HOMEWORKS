// Initialize the controller and load photos for the specific album
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const urlParams = new URLSearchParams(window.location.search);
  const albumId = urlParams.get('albumId');
  console.log('Album ID:', albumId);
  if (albumId) {
    const controller = new Controller(new View());
    controller.loadAlbumPhotos(albumId);
  }
});
