import React from 'react'
import { CategoryFilterCard } from './components/CategoryFilterCard'
import { categories } from './helpers/categories'
import { CardProduct } from './components/CardProduct'
import { SlideShow } from './components/SlideShow'

import "./HomePage.css"

export const HomePage = () => {

   
       
  return (
    <>
      <SlideShow/>
      <CategoryFilterCard category = {categories} />
      
      <div className="product-container">
      <h2 className='title-products'>Para ti</h2>
        <div className="products">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </div>
    </>
  )
}
