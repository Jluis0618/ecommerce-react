import React from 'react'
import "./CategoryFilterCard.css"

export const CategoryFilterCard = ({category}) => {
  return (
    <div className="content-category-filters">
      {category.map((category,index) =>{
            return (
                <div className="category-filters" key={index}>
                    <div className="img-category">
                        <img src={category.img} alt={category.name}/>
                    </div>
                    <div className="name-category">
                        <p>{category.name}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
