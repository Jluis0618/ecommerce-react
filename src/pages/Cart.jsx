import "./Cart.css";
import CardProductCart from "../components/CardProductCart";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect } from "react";
import { loadScript } from "@paypal/paypal-js";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );
  
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirigir al usuario a la página de inicio de sesión si no está autenticado
    window.location.href = "/login";
  }

  const loadPayPalScript = async () => {
    try {
      const paypalScript = await loadScript({
        "client-id": "AYjVpmqiIRrq9iEghiK-PSFVozz7z7Nh1zZMqOfEodlcGy0maZMsJ8ZTkoTexOPyqmIFidEaABpfXRJI",
        currency: "USD",
        intent: "capture",
      });

      paypalScript.Buttons({
        createOrder: async () => {
          const response = await fetch("http://localhost:3000/api/paypal/create-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ totalAmount: totalPrice.toFixed(2) }),
          });
          const { orderId } = await response.json();
          
          console.log(orderId)
          return orderId;
        },
        onApprove: (data) => {
          // Lógica para procesar el pago de PayPal
          alert("Pago completado con éxito");
        },
      }).render("#paypal-button-container");
    } catch (error) {
      console.error("Error al cargar el script de PayPal:", error);
    }
  };

  
  useEffect(() => {
    loadPayPalScript();
  }, [token]);


  return (
    <>
      <NavBar />
      <div className="content-cart">
        <div className="cart">
          <h1 className="cart-title">Tu carrito</h1>
          <p className="total-products-card">
            Total: <span>{cartItems.length}</span>
          </p>

          <div className="cart__items">
            {cartItems.map((product) => (
              <CardProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
        <aside className="cart-pay-aside">
          <h2 className="cart-pay-title">Resumen de compra</h2>
          <div className="cart-pay-info">
            <p>
              Cantidad de productos: <span className="cart-pay-cant">{cartItems.length}</span>
            </p>
            <p>
              Total: <span className="cart-pay-total">RD${totalPrice}</span>
            </p>
            <div id="paypal-button-container"></div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
