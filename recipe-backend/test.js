import fatsecret from './services/fatsecret.js';

const run = async () => {
  try {
    const result = await fatsecret.searchFoods('chicken');
    console.log('Final result:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
};

run();
