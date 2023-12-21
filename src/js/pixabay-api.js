export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41386506-f3e6b524b295008f7012fbeaa';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
