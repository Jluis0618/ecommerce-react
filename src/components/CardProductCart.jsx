import { useContext } from "react";
import "./CardProductCart.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";


function CardProductCart({product}) {

  const {removeFromCart} = useContext(CartContext);

  const handleDeleteProduct = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado del carrito",
          icon: "success"
        });
        removeFromCart(product._id)
      }
    });
    
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
