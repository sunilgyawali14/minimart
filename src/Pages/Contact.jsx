import "../Pages/contact.css";

function Contact() {
  return (
    <div className="form-wrapper contact-section">
      <form className="row g-3 contact-form shadow-lg p-4  rounded">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Full Name</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Enter your Full Name" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
       
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" placeholder="Butwal" />
        </div>
      
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
