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

  //accept item name
   const toggleBought = (name) => {
    setGroceryItems(prev => 
      prev.map(item => 
        item.name === name ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <GroceryContext.Provider value={{ groceryList: groceryItems, addItems, toggleBought }}>
      {children}
    </GroceryContext.Provider>
  );
}