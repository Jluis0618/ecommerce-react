import React from 'react'
import { CardProduct } from '../components/CardProduct'

export const Products = () => {
  return (
    <>
      <aside className='filters'>
        <h2>Categories</h2>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      </aside>

      <section className='products'>
        <CardProduct />
      </section>
    </>
  )
}
