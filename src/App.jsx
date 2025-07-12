import { Route, Routes } from "react-router-dom";
import  "./App.css"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Product from "./Pages/Product"
import "./App.css";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

