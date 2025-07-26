import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CartPage from "./Pages/CartPage";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    {/* toggle theme */}
      <div
        className={
          theme === "light"
            ? "bg-white text-dark min-vh-100"
            : "bg-dark text-white min-vh-100"
        }
      >
        <Navbar />
        <div className="dark-toggle-container">
          <button onClick={toggleTheme} className=" dark-toggle-btn ">
            <CiDark />
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/cart" element={<CartPage />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
