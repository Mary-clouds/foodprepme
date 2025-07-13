//to display the grocery list
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function GroceryList() {
  const { id } = useParams();

  const lentilCurry = ['Lentils', 'Coconut Milk', 'Spices'];
  const tofuStirFry = ['Tofu', 'Broccoli', 'Soy Sauce'];
  const fufuGomboStew = ['Fufu', 'Okra', 'Meat'];

  let groceryItems = [];

  if (id === '1') {
    groceryItems = lentilCurry;
  } else if (id === '2') {
    groceryItems = tofuStirFry;
  } else if (id === '3') {
    groceryItems = fufuGomboStew;
  }

  const [items, setItems] = useState(
    groceryItems.map((item) => ({ name: item, bought: false }))
  );

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
