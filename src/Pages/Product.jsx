import Customcard from "../components/Customcard";
import "../Pages/Product.css";

import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  //usesate --> memory
  //useEffect -->alarm

  const [products, setProducts] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
// show  four product per page
const itemsPerPage=8;
// calculation of pages
const start=(currentPage-1)*itemsPerPage;
const end =start+itemsPerPage;
const itemsToShow=products.slice(start,end)

//calculate the total pages according to the api
const totalPages=Math.ceil(products.length/itemsPerPage)
// handle page 
const handlePageChange =(pageNumber)=>{
 if (pageNumber >= 1 && pageNumber <= totalPages) {
  setCurrentPage(pageNumber);
}

};

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
        {itemsToShow.map((item) => (
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
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${currentPage=== 1 ? "dissable":""} `}>
      <button className="page-link" onClick={()=>handlePageChange(currentPage-1)}>      
      Previous</button></li>

    {/* page number */}
    {Array.from({length:totalPages}).map((item,index)=>(
      <li key={index} className={`page-item ${currentPage===index+1?"active":""}`}>
        <button className="page-link" onClick={()=>handlePageChange(index+1)}>
          {index+1}

        </button>
      </li>
    ))}
  {/*  Nextt button   */}
  <li className={`page-item ${currentPage===totalPages ? "disable":""}`}>
<button className="page-link" onClick={() => handlePageChange(currentPage+1)}>
Next
</button>
  </li>
     
  
  </ul>
</nav>
    </>
  );
}

export default Product;
