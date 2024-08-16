import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Use local proxy URL

const getProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${API_URL}/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return [];
  }
};

export { getProducts };
