import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import RecipeDetails from './pages/RecipeDetails';
// import SavedRecipes from './pages/SavedRecipes';
// import NotFound from './pages/NotFound';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/saved" element={<SavedRecipes />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
