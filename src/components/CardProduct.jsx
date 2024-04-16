import React, { useContext, useState } from 'react'
import "./CardProduct.css"
import { BiCartAdd, BiCheckCircle } from "react-icons/bi";
import { CartContext } from '../context/CartContext';
import Swal from "sweetalert2";


export const CardProduct = ({product}) => {

  const {addToCart} = useContext(CartContext);
  const [showCheckIcon, setShowCheckIcon] = useState(false);


  const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });

    addToCart(product);
    setShowCheckIcon(true);

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
