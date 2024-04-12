import React, { useEffect, useState, createContext, useContext } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
     const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products?page=${currentPage}`);

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
  }, [currentPage]);


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <ProductContext.Provider value={{
        products,
        currentPage,
        nextPage,
        prevPage
    }}>
      {children}
    </ProductContext.Provider>
  );
}