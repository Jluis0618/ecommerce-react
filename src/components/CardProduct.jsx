import React, { useContext, useState } from 'react'
import "./CardProduct.css"
import { BiCartAdd, BiCheckCircle } from "react-icons/bi";
import { CartContext } from '../context/CartContext';


export const CardProduct = ({product}) => {

  const {addToCart} = useContext(CartContext);
  const [showCheckIcon, setShowCheckIcon] = useState(false);


  const handleAddToCart = () => {
    addToCart(product);
    setShowCheckIcon(true);

    // Simulamos volver al icono del carrito después de 2 segundos
    setTimeout(() => {
      setShowCheckIcon(false);
    }, 2000);
  }


  return (
  <div className="card-product">
    <div className="img-product">
      <img src={product.image} alt={product.name}/>
    </div>
    <div className="product-info">
        <div className="name-product">
          <h2>{product.name}</h2>
        </div>
        {/* <div className="rate">
          <p>Rate</p>
        </div> */}
        <div className="price-product-cart">
          <h3>RD$ {product.price}</h3>
          {showCheckIcon ? (
            <BiCheckCircle className="react-cart-icon-check" />
          ) : (
            <BiCartAdd className="react-cart-icon" onClick={handleAddToCart} />
          )}
        </div>
      </div>
    
  </div>
  )
}
