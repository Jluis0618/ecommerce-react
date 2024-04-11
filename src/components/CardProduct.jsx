import React from 'react'
import "./CardProduct.css"
import { BiCartAdd } from "react-icons/bi";


export const CardProduct = () => {
  return (
  <div className="card-product">
    <div className="img-product">
      <img src="https://via.placeholder.com/150" alt="product"/>
    </div>
    <div className="product-info">
        <div className="name-product">
          <h2>Iphone 15 Pro Max</h2>
        </div>
        <div className="rate">
          <p>Rate</p>
        </div>
        <div className="price-product-cart">
          <h3>RD$ 3,000.00</h3>
          <BiCartAdd className='cart'/>
        </div>
      </div>
  </div>
  )
}
