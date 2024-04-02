import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.png";
import "./NavBar.css";
function NavBar() {
  return (
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
        </ul>
            <input type="text" placeholder="Search Products" className="input"/>
            <Link to="/cart" className="cart-icon"><img src={CartIcon} alt="Cart Icon" /></Link>
      </nav>
  );
}

export default NavBar;
