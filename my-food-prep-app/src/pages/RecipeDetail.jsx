
//single recipe view
import React from 'react';
import {useParams} from 'react-router-dom';

export default function RecipeDetail(){
    const {id} = useParams();
    const recipe = {id, title: 'Lentil curry', ingredients: ['Lentils', 'Coconut Milk', 'Spices'], steps: ['Cook Lentils', 'Add Coconut Milk', 'Simmer with Spices']};

    return(
        <div className="recipe-detail">
            <h1>{recipe.title}</h1>
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ingredients, index)=>(
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <ol>{recipe.steps.map((step, index)=>(<li key={index}>{step}</li>))}</ol>
        </div>
    );

}
