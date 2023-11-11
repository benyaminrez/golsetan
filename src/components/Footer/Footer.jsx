import "./Footer.css"
const Footer = ()=>{

return (

    <>
<footer className="text-center text-white" id="footer" >
   
  <div className="container-fluid pt-4">
    
    <section className="row mb-4">
    <div className="col-md-5">

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-instagram"></i></a>

    
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-whatsapp"></i></a>

          <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-linkedin"></i></a>

    



</div>
<div className="col-md-2 justify-content-between d-flex">
<div className="fw-bolder mt-3">گلستان</div>
<img src="src/img/logo.png" className="m-2" alt="" id="logo" />
<div className="fw-bolder mt-3">golsetan</div>
    
    
</div>
<div className="col-md-5">

    
      <div className=" m-1 fw-bolder text-light"
        
        role="button"
        data-mdb-ripple-color="dark"
        >
  <i className="bi bi-telephone-forward-fill "></i>
        ۰۹۱۹۸۲۱۵۶۵۰</div>

        </div>
    
      
    </section>
    
  </div>
  

  <div id="copyright" className="text-center text-dark p-3" >
    © 2023 Copyright:
    <a className="text-dark" >golsetan.com</a>
  </div>
  </footer>    
    </>
)


}
export default Footer