class Model {
  // Fetch all albums from the API
  static async fetchAlbums() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }
    return response.json();
  }

  // Fetch photos for a specific album from the API
  static async fetchPhotos(albumId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    return response.json();
  }
}
