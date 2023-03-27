import axios from 'axios';

export const API_KEY = '34746365-8c018e91f337134c616d4d454';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImagesFromApi(searchQuery, page) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchQuery
    )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);

    if (response.status !== 200) {
      // console.error('Error: Response status:', response.status);
      throw new Error('An error occurred while fetching images.');
    }

    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    // console.error('Error:', error);
    throw error;
  }
}