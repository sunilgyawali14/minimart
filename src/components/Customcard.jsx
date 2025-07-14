function Customcard({image,title,price,description,button}) //we have to pass props here props : is a discreption of common things in the cart
{
    return(


        <>
         <div className="card reuseable-content " style={{ width: "18rem" }}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div>{price}</div>
                    <p className="card-text">
                      
                    {description}
                    </p>
                    <a href="#" className="btn btn-primary">
                  {button}
                    </a>
                  </div>
                </div>
        </>
    );
}
export default Customcard;