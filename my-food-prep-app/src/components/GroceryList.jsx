//to display the grocery list
import React from 'react';
import { useGrocery } from '../GroceryContext';

export default function GroceryList() {
  const { groceryItems, toggleBought } = useGrocery();

  return (
    <div className="grocery-list">
      <h1>Your Grocery List</h1>
      <ul>
        {groceryItems.length === 0 && <p>No items yet.</p>}
        {groceryItems.map(({ name, bought }, index) => (
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
