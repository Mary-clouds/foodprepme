//list of all recipes

import React from 'react';
import RecipeCard from './RecipeCard';
 export default function RecipeList({recipes}){
    return(
        <div className='recipe-list'>
            {  recipes && recipes.length> 0 ?(
                    recipes.map((recipe)=>(
                    <RecipeCard key={recipe.id} recipe={recipe}/>

                ))
            ):(
            <p>No recipes found.</p>
            )
            }
        </div>
    );
 }