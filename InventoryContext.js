import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const addItem = (itemName) => {
    const newItem = { id: Date.now(), name: itemName };
    setInventory([...inventory, newItem]);
  };

  const deleteItem = (id) => {
    const updatedInventory = inventory.filter((item) => item.id !== id);
    setInventory(updatedInventory);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addItem, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};
