import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { CardProduct } from '../components/CardProduct';

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const category = 'electronics'; // Aquí puedes definir la categoría dinámicamente según la página
      const url = `http://localhost:3000/api/products/${category}?page=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data.docs); // "docs" contiene la lista de productos paginados
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, []); // Ejecutar una sola vez al montar el componente

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <NavBar />
      <h1>Productos de la categoría: Electronics</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
