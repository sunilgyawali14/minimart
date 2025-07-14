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

function Product() {
  return (
    <>
      <div className="product-container reuseable-content">
        <Customcard
          image={Product1}
          title={"Lenovo Yoga 7"}
          price={"Rs. 124k"}
          description={" Specification: Lenovo Yoga 2-in-1 16 2K Touch Laptop"}
          button={"Buy"}
        />
        <Customcard
          image={Product2}
          title={"Xiaomi Note 13"}
          price={">Rs. 28k"}
          description={
            "  Specification: Xiaomi Redmi Note 13 4G LTE (256GB + 8GB) 6.67 INCHES 108mp (midnight black)"
          }
          button={"add to cart"}
        />

        <Customcard
          image={Product3}
          title={"Ultima Boom 141 Airbuds"}
          price={"Rs.1.9k"}
          description={
            " Dual Tone Matte Finish, 10m Range, 30dB ANC 45 hrs palytime ,fast charge, Available in black"
          }
          button={"add to cart"}
        />
        <Customcard
          image={Product4}
          title={"Ultima Magic Pro"}
          price={"Rs. 3.5k"}
          description={"  A premium smartwatch with a sleek zinc alloy frame"}
          button={"Add to cart"}
        />
        <Customcard
          image={Product5}
          title={"Nike Air Force 1"}
          price={"Rs. 1.8k"}
          description={
            "  sturdy leather upper, responsive  cushioning,and versatile style"
          }
          button={"Add to cart"}
        />

        <Customcard
          image={Product6}
          title={"Iphone 16"}
          price={"Rs. 200k"}
          description={
            "    Powerful A18 chip, dual 48MP cameras, 8GB RAM, and improved battery life with iOS 18 and Apple Intelligence support."
          }
          button={"Add to cart"}
        />
        <Customcard
          image={Product7}
          title={"Tata salt"}
          price={"Rs.240"}
          description={
            "the essintaial product which plays a vitail role for a food test and used as the daily product."
          }
          button={"Add to cart"}
        />
        <Customcard
          image={Product8}
          title={" Gold sett"}
          price={"Rs. 500k"}
          description={"the gold set which make your person happy"}
          button={"Add to cart"}
        />
      </div>
    </>
  );
}

export default Product;
