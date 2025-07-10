import "./Navbar.css";
import logo from "../assets/logoforbilloratech.png";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";


function Navbar() {
  return (
    <>
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="MiniMart Logo" />
        <span className="logo-text" >Mini mart</span>
      </div>
    
      <div className="nav-links">
        <ul>
          <li><a href="#" >Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search the products..." />
        <FaSearch size={20} className="search-icon" />
      </div>

      <div className="right-icon">
        <a href="#"><FaUserAlt size={20} /></a>
      </div>

      <div className="cart-set">
        <a href="#">
          <IoCartSharp className="cart" />
          <span>Buy</span>
        </a>
      </div>
    </nav> 
    </>
  );
}

export default Navbar;
