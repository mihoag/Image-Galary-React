import axios from 'axios';

const UNSPLASH_API_URL = import.meta.env.VITE_UNSPLASH_API_URL;
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

console.log(UNSPLASH_API_URL, ACCESS_KEY);

export const fetchPhotoApi = async (page, per_page) => {
  const response = await axios.get(`${UNSPLASH_API_URL}/photos`, {
    params: { page, per_page, client_id: ACCESS_KEY },
  });
  return response;
};

export const fetchPhotoDetailApi = async (id) => {
  const response = await axios.get(`${UNSPLASH_API_URL}/photos/${id}`, {
    params: { client_id: ACCESS_KEY },
  });
  return response;
};
