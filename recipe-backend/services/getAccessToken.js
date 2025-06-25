import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let cachedToken = null;
let tokenExpiry = null;

export default async function getAccessToken() {
  const now = Date.now();

  // Return cached token if it's still valid
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const auth = Buffer.from(
    `${process.env.FATSECRET_CLIENT_ID}:${process.env.FATSECRET_CLIENT_SECRET}`
  ).toString('base64');

  try {
    const response = await axios.post(
      'https://oauth.fatsecret.com/connect/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'basic',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const { access_token, expires_in } = response.data;
    cachedToken = access_token;
    tokenExpiry = now + expires_in * 1000 - 5000; // buffer before expiration

    return cachedToken;
  } catch (err) {
    console.error('Failed to fetch access token:', err.response?.data || err.message);
    throw new Error('Could not retrieve FatSecret access token');
  }
}
