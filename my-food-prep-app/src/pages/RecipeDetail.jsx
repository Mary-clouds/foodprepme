//single recipe view
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGrocery } from '../GroceryContext';

export default function RecipeDetail() {
  const { id } = useParams();
  const { addItems } = useGrocery();

  const recipes = {
    1: { title: 'Lentil curry', ingredients: ['Lentils', 'Coconut Milk', 'Spices'], steps: ['Cook Lentils', 'Add Coconut Milk', 'Simmer with Spices'] },
    2: { title: 'Tofu Stir-fry', ingredients: ['Tofu', 'Broccoli', 'Soy Sauce'], steps: ['Fry tofu', 'Add vegetables', 'Stir with sauce'] },
    3: { title: 'Fufu Gombo Stew', ingredients: ['Fufu', 'Okra', 'Meat'], steps: ['Boil meat', 'Add okra', 'Serve with fufu'] },
  };

  const recipe = recipes[id];

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <button onClick={() => addItems(recipe.ingredients)}>
        Add to Grocery List
      </button>
    </div>
  );
}
