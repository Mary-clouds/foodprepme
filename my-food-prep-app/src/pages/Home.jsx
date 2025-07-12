//import React from 'react'; not necessary anymore
import RecipeList from '../components/RecipeList';

const sampleRecipes = [
    {id:1, title: 'Lentil Curry', time: '45 mins'},
    {id:2, title: 'Tofu Stir-fry', time: '45 mins'},
    {id:3, title: 'fufu gombo stew', time: '45 mins'},
];

export default function Home(){
    return(
    <div>
         <div className="home-grid">
        <h1>Healthy recipes</h1>
       <RecipeList recipes={sampleRecipes} />
       </div>
    </div>
    );
}
