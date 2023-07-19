import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Nintendo 3DS XL', qty: '1', upc: 'SW141624523', image:'https://techcrunch.com/wp-content/uploads/2015/02/new-3ds-xl-2.jpg' },
    { id: 2, name: 'Usborne Baby Animals Book', qty: '1', upc: '9780794521059', image:'https://m.media-amazon.com/images/I/51yw9sN+D0L._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, name: 'Yankee Candle Sparkling Cinnamon', qty: '1', upc: '19283315468', image:'https://www.justmylook.com/images/sparkling-cinnamon-large-jar-candle-p15476-28180_image.jpg' },
  ]);

  const addItem = (itemName, qty, upc, image) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      qty: qty,
      upc: upc,
      image: image,
    };
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
