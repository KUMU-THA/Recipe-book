import React, { useState } from 'react';
import './App.css';
const recipesData = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Pepper'],
    instructions:
      'Cook spaghetti. Mix eggs and cheese. Fry pancetta. Combine all and season.',
  },
  {
    id: 2,
    name: 'Tomato Soup',
    ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Vegetable stock', 'Cream'],
    instructions:
      'Cook tomatoes with onion and garlic. Blend. Add stock and cream. Simmer.',
  },
  {
    id: 3,
    name: 'Pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter'],
    instructions:
      'Mix ingredients. Pour batter on pan. Flip when bubbles form. Serve hot.',
  },
  {
    id: 4,
    name: 'Chicken Curry',
    ingredients: ['Chicken', 'Onion', 'Tomato', 'Spices', 'Yogurt'],
    instructions:
      'Cook onions and spices. Add chicken and tomato. Simmer until cooked. Add yogurt at the end.',
  },
  {
    id: 5,
    name: 'Caesar Salad',
    ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar dressing'],
    instructions:
      'Toss lettuce with dressing. Add croutons and parmesan on top.',
  },
  {
    id: 6,
    name: 'Chocolate Brownies',
    ingredients: ['Chocolate', 'Flour', 'Butter', 'Sugar', 'Eggs'],
    instructions:
      'Mix melted chocolate with butter and sugar. Add eggs and flour. Bake until done.',
  },
];
export default function App() {
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipesData.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Recipe Book</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!selectedRecipe && (
        <ul className="recipe-list">
          {filteredRecipes.length ? (
            filteredRecipes.map((recipe) => (
              <li key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
                {recipe.name}
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      )}

      {selectedRecipe && (
        <div>
          <button className="back-button" onClick={() => setSelectedRecipe(null)}>
            ← Back to list
          </button>

          <h2>{selectedRecipe.name}</h2>

          <h3>Ingredients:</h3>
          <ul className="ingredients">
            {selectedRecipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>Instructions:</h3>
          <p className="instructions">{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
}
