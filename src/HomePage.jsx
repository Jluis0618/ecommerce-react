import React, { useContext, useEffect, useState } from 'react'
import { CategoryFilterCard } from './components/CategoryFilterCard'
import { categories } from './helpers/categories'
import { CardProduct } from './components/CardProduct'
import { SlideShow } from './components/SlideShow'

import "./HomePage.css"
import { ProductContext } from './context/ProductContext'

export const HomePage = () => {

  const products = useContext(ProductContext);

  return (
    <>
      <SlideShow/>
      <CategoryFilterCard category = {categories} />
      
      <div className="product-container">
      <h2 className='title-products'>Para ti</h2>
        <div className="products">
        {products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))} 
        </div>
      </div>
    </>
  )
}
