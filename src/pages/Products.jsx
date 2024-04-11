import React from 'react'
import { CardProduct } from '../components/CardProduct'
import { ProductFilter } from '../components/ProductFilter'

import './Products.css'
export const Products = () => {
  return (
    <>
      <div className="container-products">
          <section className="sec-filters">
            <ProductFilter/>
          </section>
          <section className='sec-products'>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </section>
      </div>
    </>
  )
}
