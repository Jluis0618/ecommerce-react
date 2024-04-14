// CartContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cart/one', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const cartData = await response.json();
          setCartItems(cartData);
        } else {
          console.error('Error al obtener productos del carrito');
        }
      } catch (error) {
        console.error('Error al obtener productos del carrito:', error);
      }
    };

    if (token) {
      fetchCartItems();
    }
  }, [token]);

  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const addedProduct = await response.json();
        setCartItems([...cartItems, addedProduct]);
      } else {
        const errorData = await response.json();
        console.error('Error al agregar producto al carrito:', errorData.error);
      }
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const updatedCartItems = cartItems.filter(item => item._id !== productId);
        setCartItems(updatedCartItems);
      } else {
        console.error('Error al eliminar producto del carrito');
      }
    } catch (error) {
      console.error('Error al eliminar producto del carrito:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
