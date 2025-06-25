import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:3001/search-food?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        console.error('Backend error:', res.status);
        setError('Failed to fetch recipes.');
        setResults([]);
        return;
      }
      const data = await res.json();
      console.log('Frontend received data:', data);

      // Update here: access recipes.recipe array, or empty array if not present
      setResults(data.recipes?.recipe || []);
    } catch (err) {
      setError('Something went wrong while fetching results.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid gap-4">
        {results.length > 0 ? (
          results.map((item) => (
            // The FatSecret API uses recipe_id as unique ID
            <RecipeCard key={item.recipe_id} recipe={item} />
          ))
        ) : (
          !loading && <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
