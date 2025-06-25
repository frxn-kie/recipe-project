import axios from 'axios';
import qs from 'qs';
import getAccessToken from '../services/getAccessToken.js';

async function searchFoods(query) {
  try {
    const token = await getAccessToken();

    const response = await axios({
      method: 'post',
      url: 'https://platform.fatsecret.com/rest/server.api',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        method: 'recipes.search.v3',
        format: 'json',
        search_expression: query,
      }),
    });
    console.log('FatSecret API response:', response.data);
    return response.data;
  } catch (error) {
  console.error('FatSecret error:', {
    message: error.message,
    data: error.response?.data,
    status: error.response?.status,
    stack: error.stack,
  });
  throw error;
}

}

export default {
  searchFoods,
};
