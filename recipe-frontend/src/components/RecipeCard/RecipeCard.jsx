import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.recipe_image || 'https://via.placeholder.com/300'}
        alt={recipe.recipe_name}
        className="recipe-card-image"
      />
      <div className="recipe-card-content">
        <h2 className="recipe-card-title">{recipe.recipe_name}</h2>
        <p className="recipe-card-meta">{recipe.recipe_description}</p>
        <a
          href={recipe.recipe_url}
          target="_blank"
          rel="noopener noreferrer"
          className="recipe-card-link"
        >
          View Full Recipe →
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
