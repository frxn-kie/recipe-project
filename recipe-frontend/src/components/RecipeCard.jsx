function RecipeCard({ recipe }) {
  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{recipe.recipe_name}</h2>
      <p className="text-sm text-gray-600">{recipe.recipe_description}</p>
    </div>
  );
}

export default RecipeCard;
