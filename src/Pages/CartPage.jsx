import "../Pages/CartPage.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h4> this is cart page go when click in the cart option</h4>

      {cart === 0 ? (
        <p>your cart is empty so Buy somethings At first.</p>
      ) : (
        <ul>
          {cart.map((item, key) => (
            <li key={key} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CartPage;
