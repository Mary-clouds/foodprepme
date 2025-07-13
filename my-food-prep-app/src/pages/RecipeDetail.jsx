//single recipe view

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGrocery } from '../components/GroceryContext';

export default function RecipeDetail() {
  const { id } = useParams();
  const { addItems } = useGrocery();
  const [showMessage, setShowMessage] = useState(false);

const handleAddToGrocery = () => {
    addItems(recipe.ingredients);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide after 2 seconds
  };
  //now for the recipe below
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
      <button onClick={(handleAddToGrocery)}>
        Add to Grocery List
      </button>
      {showMessage && (
        <div className="popup-message" style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          opacity: 0.9,
          zIndex: 1000
        }}>
          Added to grocery list!
        </div>
      )}
    </div>
  );
}
