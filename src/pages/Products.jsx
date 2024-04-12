import React, { useContext, useEffect } from 'react'
import { CardProduct } from '../components/CardProduct'
import { ProductFilter } from '../components/ProductFilter'

import './Products.css'
import { ProductContext } from '../context/ProductContext'
export const Products = () => {

  const {products, applyFilters, resetFilters} = useContext(ProductContext);

  useEffect(()=>{
    applyFilters();
  }, [])


  return (
    <>
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
    </>
  )
}
