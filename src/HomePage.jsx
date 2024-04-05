import React from 'react'
import { CategoryFilterCard } from './components/CategoryFilterCard'


export const HomePage = () => {

    const categories = [{
        name: "Categoría 1",
         img: "https://via.placeholder.com/150" 
       }, {
         name: "Categoría 2",
         img: "https://via.placeholder.com/150"
       }]
  return (
    <>
      <CategoryFilterCard category = {categories} />
    </>
  )
}
