import React, { createContext, useContext, useState } from 'react';

const GroceryContext = createContext();

export function useGrocery() {
  return useContext(GroceryContext);
}

export function GroceryProvider({ children }) {
  const [groceryItems, setGroceryItems] = useState([]);

  const addItems = (items) => {
    setGroceryItems((prev) => {
      const newItems = items.map(name => ({ name, bought: false }));
      // Avoid duplicates
      const unique = [...prev];
      newItems.forEach(item => {
        if (!unique.find(i => i.name === item.name)) {
          unique.push(item);
        }
      });
      return unique;
    });
  };

  const toggleBought = (index) => {
    setGroceryItems(prev => {
      const updated = [...prev];
      updated[index].bought = !updated[index].bought;
      return updated;
    });
  };

  return (
    <GroceryContext.Provider value={{ groceryItems, addItems, toggleBought }}>
      {children}
    </GroceryContext.Provider>
  );
}
