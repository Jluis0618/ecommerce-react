import "./Cart.css";
import CardProductCart from "./CardProductCart.jsx";
function Cart() {
  return (
    <>
      <section className="cart-section">
        <main className="products-list-cart-main">
          <div className="cards-list">
            <CardProductCart />
            <CardProductCart />
            <CardProductCart />
          </div>
        </main>
        <aside>
          <div className="list-buy-cart-div">
            <ol className="list-buy-cart-list">
              <li>Product Name |  Product Price</li>
              <br />
              <li>Product Name |  Product Price</li>
              <br />
              <li>Product Name |  Product Price</li>
              <br />
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
export default Cart;
