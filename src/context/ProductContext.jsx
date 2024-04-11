import React, { useEffect, useState, createContext, useContext } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');

        if (!response.ok) {
          throw new Error('Ocurrió un error al obtener los productos');
        }

        const data = await response.json();
        setProducts(data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={
        products
        }>
      {children}
    </ProductContext.Provider>
  );
}