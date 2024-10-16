import axios from 'axios';

// Base URL for the Unsplash API, retrieved from environment variables
const UNSPLASH_API_URL = import.meta.env.VITE_UNSPLASH_API_URL;

// Access key for the Unsplash API, retrieved from environment variables
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

/**
 * Fetches a list of photos from the Unsplash API.
 *
 * @param {number} page - The page number to fetch.
 * @param {number} per_page - The number of photos per page.
 * @returns {Promise} - A promise that resolves to the response from the Unsplash API.
 */
export const fetchPhotoApi = async (page, per_page) => {
  const response = await axios.get(`${UNSPLASH_API_URL}/photos`, {
    params: { page, per_page, client_id: ACCESS_KEY },
  });
  return response;
};

/**
 * Fetches the details of a specific photo from the Unsplash API.
 *
 * @param {string} id - The ID of the photo to fetch.
 * @returns {Promise} - A promise that resolves to the response from the Unsplash API.
 */
export const fetchPhotoDetailApi = async (id) => {
  const response = await axios.get(`${UNSPLASH_API_URL}/photos/${id}`, {
    params: { client_id: ACCESS_KEY },
  });
  return response;
};
