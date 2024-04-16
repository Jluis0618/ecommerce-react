import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import "./NavBar.css";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";




function NavBar() {

  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const totalCartItems = cartItems.length || 0;

  const handleLogout = () => {
    logout();
  }


  return (
      <nav className={`navbar-main`}>
          <Link to="/" className="company-name">SpoTech</Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="links">Inicio</Link>
          </li>
          <li>
            <Link to="/products" className="links">Productos</Link>
          </li>
          <li>
            <Link to="/contact" className="links">Contacto</Link>
          </li>
        </ul>

        {/* <input type="text" placeholder="Buscar productos" className="input-search-term"/> */}

        <div className="log-container">
           {user ? (
          <>
            <div className="account">
              <MdAccountCircle className="react-icon-account" />
              <p>{user.name}</p>
            </div>
            <button onClick={handleLogout} className="btnLogOut">Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login" className="btnLogIn">Iniciar sesión</Link>
        )}
        </div>

        <Link 
              to="/cart" 
              className="cart-icon">
                
                <IoCartSharp className="react-icon-cart"/>
                {
                  totalCartItems > 0 && (
                    <span className="cart-counter">{totalCartItems}</span>
                  )
                }
           </Link>


      </nav>
  );
}

export default NavBar;
