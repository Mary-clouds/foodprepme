//to display the grocery list
import React, { useState } from 'react';
export default function GroceryList(){
    const groceryItems =['Lentils', 'Coconut Milk', 'Spices'];
    // State to track which items are bought (true/false)
  const [items, setItems] = useState(
    groceryItems.map(item => ({ name: item, bought: false }))
  );
  // Toggle the bought state of an item
    const toggleBought = (index) => {
    const newItems = [...items];
    newItems[index].bought = !newItems[index].bought;
    setItems(newItems);
  };
    return(
        <div className="grocery-list">
            <h1>
                Grocery List
            </h1>
            <ul>
                {items.map(({ name, bought }, index) => (
          <li 
            key={index} 
            className={`grocery-item ${bought ? 'bought' : ''}`}
          >
            <span role="img" aria-label="shopping bag" className="item-icon">
              🛒
            </span>
            {name}
            <button 
              onClick={() => toggleBought(index)} 
              className="buy-btn"
            >
              {bought ? 'Undo' : 'Bought'}
            </button>
          </li>))}
            </ul>
        </div>
        
    );
}