import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50283809-fb8098277938dfac7f33d4612';

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  // await delay(1000);
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
