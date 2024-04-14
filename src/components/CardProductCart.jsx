import { useContext } from "react";
import "./CardProductCart.css";
import { CartContext } from "../context/CartContext";

function CardProductCart({product}) {

  const {removeFromCart} = useContext(CartContext);

  const handleDeleteProduct = () => {
    removeFromCart(product._id)
  }

  return (
    <div className="container-card-product-cart">
     <div className="card-product-cart">
         <div className="card-products-cart-img">
        <img
          src={product.image}
          alt={product.name}
          />
      </div>
      <div className="card-product-cart-info">
          <div className="card-product-cart-info-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          </div>
          <div className="card-product-cart-controls">
            <a onClick={handleDeleteProduct}>Eliminar</a>
          </div>
        </div>
     </div>
        <div className="price">
               <p>Precio: <span>RD${product.price}</span></p>
        </div>
    </div>
  );
}

export default CardProductCart;
