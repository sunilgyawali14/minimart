import "./Navbar.css";
import logo from "../assets/logoforbilloratech.jpg";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="MiniMart Logo" width="30" height="24" />
        <span>Mini mart</span>
      </div>

      <div>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Buy</a></li>
        </ul>
      </div>

      <div>
        <FaSearch />
        <input   type="text" className="search"   placeholder="Search the products"   />
      </div>
    </nav>
  );
}

export default Navbar;
