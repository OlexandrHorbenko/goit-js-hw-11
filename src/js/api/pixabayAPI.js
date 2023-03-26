import axios from 'axios';

export const API_KEY = '34746365-8c018e91f337134c616d4d454';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImagesFromApi(searchQuery, page) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchQuery
    )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);

    const { hits } = response.data;
    return hits;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}