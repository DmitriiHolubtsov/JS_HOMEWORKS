class Controller {
  constructor(view) {
    this.view = view;
  }

  // Initialize the app by fetching and displaying albums
  async initialize() {
    try {
      const albums = await Model.fetchAlbums();
      this.view.displayAlbums(albums);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  // Load photos for a specific album and display them
  async loadAlbumPhotos(albumId) {
    try {
      const photos = await Model.fetchPhotos(albumId);
      this.view.displayPhotos(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }
}
