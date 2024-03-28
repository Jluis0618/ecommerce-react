import "./CardProductCart.css";

function CardProductCart() {
  return (
    <div className="card-product-cart">
      <div className="card-product-cart-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZU1oNd1RdUh1Lh4wbYfMVrOeTLgyEfQmqA&usqp=CAU"
          alt="Foto del producto"
        />
      </div>
      <div className="card-product-cart-info">
        <h3 className="card-product-cart-text">Product Name</h3>
        <br />
        <p>Product Price</p>
      </div>
    </div>
  );
}
export default CardProductCart;
