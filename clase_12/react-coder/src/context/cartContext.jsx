import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [ cartItems, setCartItems ] = useState([]);

  const addItem = (item) => {
    const existingItem = cartItems.find(currentItem => currentItem.id === item.id);

    if (existingItem) {
      cartItems.map(currentItem => currentItem.id === item.id
        ? {...currentItem, quantity: currentItem.quantity + 1}
        : currentItem
      )
    } else {
      const quantity = item.quantity || 1;
      setCartItems([...cartItems, { item, quantity}])
    }
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(currentItem => currentItem.id !== id));
  }

  const updateItemQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map(currentItem => currentItem.id === id ? {...currentItem, quantity} : item)
    );
  }

  const clearCart = () => {
    setCartItems([]);
  };


  return <CartContext.Provider
    value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart }}
  >
    { children }
  </CartContext.Provider>
};