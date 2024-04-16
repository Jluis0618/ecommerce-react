import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { CardProduct } from '../components/CardProduct';
import "./ProductCategory.css"

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = location.pathname.split('/').pop();
  
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      
      const url = `http://localhost:3000/api/products/${category}?page=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data.docs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);


  return (
    <>
      <NavBar />
      <div className="content-product-list">
      <h1 className='title-product-list'>{categoryCapitalized}</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
      </div>
    </>
  );
};

export default ProductCategory;
