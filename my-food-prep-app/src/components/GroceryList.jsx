//to display the grocery list
import React, { useState, useEffect } from 'react';
import { useGrocery } from './GroceryContext';

export default function GroceryList() {
  const { groceryList, toggleBought } = useGrocery();// get grocery list from context

  return (
    <div className="grocery-list">
      <h1>Grocery List</h1>
      {groceryList.length === 0 && <p>Your grocery list is empty.</p>}
      <ul>
        {groceryList.map(({ name, bought }) => (
          <li key={name} className={bought ? 'bought' : ''}>
            <span role="img" aria-label="shopping bag">🛒</span> {name}
            <button style={{ marginLeft: '10px', padding: '5px' }} onClick={() => toggleBought(name)}>
              {bought ? 'Undo' : 'Bought'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}