import Image from "../assets/homepic.png"
function Home() {
  return (
    <>

 {/* <div className="home">
<h1>welcome to Mini mart</h1>
<h2>explore the products here.</h2>
<br />
 <button className="shop-icon">Shop Now</button></div> */}
<div className="home-container">
  <div>
    <span className="home-welcome">welcome</span> to Mini mart 
<img src={Image} alt="" />
  </div>

</div>



  </>
  )
}
export default Home
