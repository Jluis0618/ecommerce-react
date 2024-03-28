import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.png";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="navbar-main">
          <h2 className="company-name">Company Name</h2>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="links">Home</Link>
          </li>
          <li>
            <Link to="/products" className="links">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="links">Contact</Link>
          </li>
          <li className="input">
            <input type="text" placeholder="Search Products"/>
          </li>
          <li className="cart-icon">
            <Link to="/cart" className="links"><img src={CartIcon} alt="Cart Icon" /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
