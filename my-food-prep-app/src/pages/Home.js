import React from 'react';
import RecipeCard from '../components/RecipeCard';

const sampleRecipes = [
    {id:1, title: 'Lentil Curry', time: '45 mins'},
    {id:2, title: 'Tofu Stir-fry', time: '45 mins'},
    {id:3, title: 'fufu gombo stew', time: '45 mins'},
];

export default function Home(){
    return(
    <div>
        <h1>Healthy recipes</h1>
        <div className='recipe-list'>
            {sampleRecipes.map((recipe)=>(
                <RecipeCard key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    </div>
    );
}
