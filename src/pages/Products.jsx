import React, { useContext, useEffect } from 'react'
import { CardProduct } from '../components/CardProduct'
import { ProductFilter } from '../components/ProductFilter'
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import './Products.css'
import { ProductContext } from '../context/ProductContext'
export const Products = () => {

  const {products, applyFilters, resetFilters, nextPage, prevPage } = useContext(ProductContext);
  
  const handleNextPage = () => {
    nextPage();
  }

  const handlePreviousPage = () => {
    prevPage();
  }

  useEffect(()=>{
    applyFilters();
  }, [])


  return (
    <>
    <NavBar />
      <div className="container-products">
          <section className="sec-filters">
            <ProductFilter/>
          </section>
          <section className='sec-products'>
          {products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))} 
          </section>
          
      </div>
      <div className="pagination">
            <button onClick={handlePreviousPage}>Anterior</button>
            <button onClick={handleNextPage}>Siguiente</button>
          </div>
      <Footer/>
    </>
  )
}
