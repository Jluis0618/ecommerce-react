import "./CardProductCart.css";

function CardProductCart() {
  return (
    <div className="card-product-cart">
      <div className="card-products-cart-img">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0V6bN3cEVx6SY-r3xGR9qzk2mn91yJ_91A&usqp=CAU"
        alt="Foto del producto"
        />
        <h2>Product Name</h2>
        <p>Product description</p>
        <div className="price">
            <p>Precio: 15.32$</p>
        </div>
      </div>
    </div>
  );
}

export default CardProductCart;
