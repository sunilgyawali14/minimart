import "./Home.css"
import Image from "../assets/homepic.png"
import Shoes from "../assets/nike1.jpg"
import Jewerly from "../assets/Gold.jpg"
import Salt from "../assets/product8.jpg"
function Home() {
  return (
    <>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={Shoes} className="d-block w-100 carousel-image" alt="Shoes" size={5} />
      <div className="carousel-caption d-none d-md-block bg-caption">
        <h5 className="animate__animated animate__fadeInDown">Latest Footwear</h5>
        <p className="animate__animated animate__fadeInUp">Step into style with our trendy collection.</p>
      </div>
    </div>

    <div className="carousel-item" data-bs-interval="5000">
      <img src={Jewerly} className="d-block w-100 carousel-image" alt="Jewelry" size={0}  />
      <div className="carousel-caption d-none d-md-block bg-caption">
        <h5 className="animate__animated animate__fadeInDown">Elegant Jewelry</h5>
        <p className="animate__animated animate__fadeInUp">Shine with our handpicked pieces.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Salt} className="d-block w-100 carousel-image" alt="Salt"  size={0} />
      <div className="carousel-caption d-none d-md-block bg-caption">
        <h5 className="animate__animated animate__fadeInDown">Pure Salt</h5>
        <p className="animate__animated animate__fadeInUp">Essential for every kitchen shelf.</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


{/* <div className="home-container">
  <div>
    <span className="home-welcome">welcome</span> to Mini mart 
<img src={Image} alt="" />
  </div>

</div> */}



  </>
  );
}
export default Home;
