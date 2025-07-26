import "./Navbar.css";
import logo from "../assets/logoforbilloratech.png";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="MiniMart Logo" />
          <span className="logo-text">Mini mart</span>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/About">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/Product">Product</Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search the products..." />
          <FaSearch size={20} className="search-icon" />
        </div>

        <div className="profile-icon">
          <a href="#">
            <FaUserAlt size={20} />
          </a>
        </div>

        <div className="cart-set">
          <Link to="/cart" className="cart-wrapper">
            <IoCartSharp className="cart-icon" />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
