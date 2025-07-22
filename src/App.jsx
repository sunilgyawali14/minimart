import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Product from "./Pages/Product";
import "./App.css";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme === 'light'?'bg-dark text-white min-vh-100': 'bg-white text-black min-vh-100'}
      >
        <Navbar />

        <div>
        <button onClick={toggleTheme} >
        <CiDark />
        </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
