import React from 'react'
import "./CardProduct.css"
import { BiCartAdd } from "react-icons/bi";


export const CardProduct = () => {
  return (
  <div className="card-product">
    <div className="img-product">
      <img src="https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_1280.jpg" alt="product"/>
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
