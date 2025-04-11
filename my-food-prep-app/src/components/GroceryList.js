//to display the grocery list
export default function GroceryList(){
    const groceryItems =['Lentils', 'Coconut Milk', 'Spices'];

    return(
        <div>
            <h1>
                Grocery List
            </h1>
            <ul>
                {groceryItems.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}