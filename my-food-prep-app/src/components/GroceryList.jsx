//to display the grocery list
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function GroceryList() {
  const { id } = useParams();

   const recipes = {
    1: ['Lentils', 'Coconut Milk', 'Spices'],
    2: ['Tofu', 'Broccoli', 'Soy Sauce'],
    3: ['Fufu', 'Okra', 'Meat']
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const groceryItems = recipes[id] || [];
    setItems(groceryItems.map((item) => ({ name: item, bought: false })));
  }, [id]);

  const toggleBought = (index) => {
    const newItems = [...items];
    newItems[index].bought = !newItems[index].bought;
    setItems(newItems);
  };

  return (
    <div className="grocery-list">
      <h1>Grocery List</h1>
      <ul>
        {items.map(({ name, bought }, index) => (
          <li key={index} className={`grocery-item ${bought ? 'bought' : ''}`}>
            <span role="img" aria-label="shopping bag">🛒</span> {name}
            <button onClick={() => toggleBought(index)}>
              {bought ? 'Undo' : 'Bought'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}