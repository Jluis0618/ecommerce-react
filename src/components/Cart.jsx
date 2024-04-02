import "./Cart.css";
import CardProductCart from "./CardProductCart";
function Cart() {
  return (
    <>
    <h1 className="cart-title">Products in the cart</h1>
    <hr />
    <div className="cart-section-div"> 
      <main className="card-product-cards">
        <CardProductCart />
        <CardProductCart />
        <CardProductCart />
      </main>
      <aside className="cart-list-aside">
        <div className="cart-buy-list">
          <ol>
            <li>Product name</li>
            <br />
            <br />
            <li>Product name</li>
          </ol>
          <span>Total: 15.32$</span>
          <button type="button">Buy now</button>
        </div>
      </aside>
    </div>
    </>
  );
}

export default Cart;
