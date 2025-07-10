import "./Navbar.css";
import Logo from "../assets/logoforbilloratech.jpg";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

function Navbar() {
  return (

    <>
     <nav className="nav-bar">
       <div className="logo">
        <img src={Logo} alt="MiniMart Logo" width="30" height="24" />
        <span>Mini mart</span>
      </div>

      <div className="right-secNavigation">
        <ul>
          <li><a href="#" >Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Buy</a></li>
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
