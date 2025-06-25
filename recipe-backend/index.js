import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fatsecret from './services/fatsecret.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

router.get('/search-food', async (req, res) => {
  const query = req.query.q;
  console.log('Received search query:', query);

  if (!query) {
    console.log('No query provided');
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const results = await fatsecret.searchFoods(query);
    console.log('Search results:', results);
    res.json(results);
  } catch (error) {
    console.error('Backend search error:', error.message);
    res.status(500).json({ error: 'Search failed' });
  }
});


const PORT = process.env.PORT || 3001;
app.use('/', router);
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

export default router;
