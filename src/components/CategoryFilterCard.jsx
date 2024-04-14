import React from 'react'
import "./CategoryFilterCard.css"
import { Link } from 'react-router-dom'

export const CategoryFilterCard = ({category}) => {
  return (
    <div className="content-category-filters">
      {category.map((category,index) =>{
            return (
                <Link to={`/products/${(category.name).toLowerCase()}`} className="category-filters" key={index} >
                    <div className="img-category">
                        <img src={category.img} alt={category.name}/>
                    </div>
                    <div className="name-category">
                        <p>{category.name}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
