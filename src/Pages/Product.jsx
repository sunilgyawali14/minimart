import "../Pages/Product.css";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/iphone2.jpg";
import Product7 from "../assets/product8.jpg";
import Product8 from "../assets/Gold.jpg"

function Product() {
  return (
    <>
      <div className="product-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Product1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lenovo Yoga 7</h5>
            <div>Rs. 124k</div>
            <p className="card-text">
              
              Specification: Lenovo Yoga 2-in-1 16 2K Touch Laptop | AMD Ryzen 7
              8840HS Beat Intel Ultra 5| AMD Radeon Graphics | Backlit |
              Fingerprint | 16GB RAM DDR5 | 1024GB SSD | Windows 11 Home |
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={Product2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Xiaomi Note 13</h5>
            <div>Rs. 28k</div>
            <p className="card-text">
              
              Specification: Xiaomi Redmi Note 13 4G LTE (256GB + 8GB) 6.67"
              108MP (for Tmobile Mint Tello Global) Global Version (Midnight
              Black)
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={Product3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ultima Boom 141 Airbuds</h5>
            <div>Rs.1.9k</div>
            <p className="card-text">
              
              Dual Tone Matte Finish, 10m Range, 30dB ANC, 45H Playtime, Fast
              Charge. Available in Space Black
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={Product4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ultima Magic Pro</h5>
            <div>Rs. 3.5k</div>
            <p className="card-text">
              
              A premium smartwatch with a sleek zinc alloy frame, 1.96″ HD
              display, 100+ sports modes, and more. Stay connected and healthy
              in style!
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={Product5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nike Air Force 1 </h5>
          <div>Rs. 1.8k</div>
            <p className="card-text">
              
              sturdy leather upper, responsive cushioning, and versatile style
              that pairs well with any outfit
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={Product6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Iphone 16 </h5>
           <div> Rs. 200k</div>
            <p className="card-text">
             Powerful A18 chip, dual 48MP cameras, 8GB RAM, and improved battery life with iOS 18 and Apple Intelligence support.
            </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>


         <div className="card" style={{ width: "18rem" }}>
          <img src={Product7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tata salt</h5>
              <div>Rs.240</div>
            <p className="card-text">
             
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
             Buy
            </a>
          </div>
        </div>

         <div className="card" style={{ width: "18rem" }}>
          <img src={Product8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> Gold set</h5>
            <div>Rs. 500k</div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
             Buy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
