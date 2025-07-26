import "../components/CustomCard.css";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function CustomCard({ image, title, price, description, button, children }) {
  //we have to pass props here props : is a discreption of common things in the cart
  const [isExpanded, setIsExpanded] = useState(false);

  // add to cart
  const { addToCart } = useContext(CartContext);
  const handleCart = () => {
    addToCart({title,image,description,price});
  };
  return (
    <>
      <div className="card reuseable-content " style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div>{price}</div>
          <p
            className={`card-text  description ${
              isExpanded ? "desc-full" : "desc-short"
            }`}
          >
            {description}
          </p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="btn">
            {isExpanded ? "Show Less" : "Read More"}
          </button>
          {children}
          <div>
            <button className="btn btn-primary" onClick={handleCart}>
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomCard;
