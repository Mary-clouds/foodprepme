//single recipe view
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const recipes = {
  1: {
    title: 'Lentil Curry',
    ingredients: ['Lentils', 'Coconut Milk', 'Spices'],
    steps: ['Cook Lentils', 'Add Coconut Milk', 'Simmer with Spices']
  },
  2: {
    title: 'Tofu Stir-fry',
    ingredients: ['Tofu', 'Broccoli', 'Soy Sauce'],
    steps: ['Chop Tofu', 'Stir-fry with Broccoli', 'Add Soy Sauce']
  },
  3: {
    title: 'Fufu Gombo Stew',
    ingredients: ['Fufu', 'Okra', 'Meat'],
    steps: ['Prepare Fufu', 'Cook Okra', 'Simmer Meat']
  }
};

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <h2>Steps:</h2>
      <ol>
        {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
      <Link to={`/grocery/${id}`}>View Grocery List</Link>
    </div>
  );
}
