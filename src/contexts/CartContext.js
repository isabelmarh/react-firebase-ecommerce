import React, { useState, useContext } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((total, cartItem) => {
    return cartItem.quantity * cartItem.item.price + total;
  }, 0);


  function addToCart(newItem) {
    const currentItemIndex = cart.findIndex(
      (cartItem) => newItem.item.id === cartItem.item.id
    );
    // If item exist , we add new value
    if (currentItemIndex !== -1) {
      const c = [...cart];
      c[currentItemIndex].quantity = newItem.quantity;
      setCart(c);
    } else {
      // New item in town
      const c = [...cart, newItem];
      setCart(c);
    }
  }

  function clearCart() {
    setCart([]);
  }
  const quantity = cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);
  
  return (
    <CartContext.Provider value={{ 
      cart, addToCart, quantity, clearCart, total}}>
      {children}
    </CartContext.Provider>
  );
}

