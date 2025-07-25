import Customcard from "../components/Customcard";
import "../Pages/Product.css";

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
        console.log("You are getting data now", res.data);
      })
      .catch((err) => {
        console.log("Error in fetching the json", err);
      });
  }, []);
  return (
    <>
      <div className="product-container reuseable-content">
        {products.map((item) => (
          <Customcard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            button={"Add to cart"}
          />
        ))}
      </div>
    </>
  );
}

export default Product;
