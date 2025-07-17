import Customcard from "../components/Customcard";
import "../Pages/Product.css";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/iphone2.jpg";
import Product7 from "../assets/product8.jpg";
import Product8 from "../assets/Gold.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  //usesate --> memory
  //useEffect -->alarm

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log("You are getting data now",res.data);
      })
      .catch((err) => {
        console.log("Error in fetching the json", err);
      });
  }, []);
  return (
    <>
      <div className="product-container reuseable-content">
        {products.map((item)=>(
          <Customcard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          button={"Add to cart"}
        />))}
       
      </div>
    </>
  );
}

export default Product;
