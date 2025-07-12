//card for displaying recipes
import {Link} from 'react-router-dom';

export default function RecipeCard({recipe}){
    return(
        <div className='recipe-card'>
        <h2>{recipe.title}</h2>
        <p>Time: {recipe.duration}</p>
        <Link to={`/recipe/${recipe.id}`}> View Recipe</Link>
        </div>
    );
}