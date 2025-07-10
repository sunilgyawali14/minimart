import "./Navbar.css";
<<<<<<< HEAD
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
=======
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
>>>>>>> dev
        <ul>
          <li><a href="#" >Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

<<<<<<< HEAD
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
=======
       <div className="search-bar">  
        <input type="text"  placeholder="Search the products.." />
         <FaSearch size={20} className="search-icon"/>
      </div>

      <div  className="profile-icon">
       <a href="#"> <FaUserAlt size={20}/></a>
      </div>

       <div className="cart-set">
        <a href="#"> <IoCartSharp className="cart" /></a> 
        </div>
             
      
</nav>
</>
>>>>>>> dev
  );
}

export default Navbar;
