import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import "./NavBar.css";
import { AuthContext } from "../context/AuthContext";




function NavBar() {

  const { user, logout } = useContext(AuthContext);


  const handleLogout = () => {
    logout();
    window.location.href = "/login";
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
           <Link to="/cart" className="cart-icon"><IoCartSharp className="react-icon-cart"/></Link>
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



      </nav>
  );
}

export default NavBar;
