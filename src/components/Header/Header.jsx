import { Link } from "react-router-dom";
import "./Header.css"
const Header = () =>{

  $(window).scroll(function(){
    let scrollDist = $(document).scrollTop();
    if (scrollDist < 400) {
      $(".navbar").addClass('bg-opacity-25')
      $('.navbar').removeClass('navbar-dark shadow')
      $(".bi").addClass('text-dark')
      $(".bi").removeClass('text-light')
      $("#logo").removeClass('bg-light')
    } else{
      $('.navbar').removeClass('bg-opacity-25 navbar-light')
      $(".navbar").addClass('navbar-dark shadow')
      $(".bi").addClass('text-light')
      $(".bi").removeClass('text-dark')
      $("#logo").addClass('bg-light')
    }    
  })
    return(
        <>
       <nav className="navbar navbar-expand-lg  navbar-light bg-success bg-opacity-25  sticky-top ">
  <div className="container-fluid row">

    <div className="col-md-3 justify-content-center d-flex">
    <img className="shadow-lg" src="src/img/logo.png" alt="" id="logo" />
    <Link className="btn" to={"/"}>
        <i className="bi bi-house-fill h1 ms-3 shadow-sm "></i>
       </Link>
      <i className="bi bi-telephone-forward-fill  mt-3 h4 shadow-lg text-black-75 "></i>
      <b className="shadow-sm bi h4 fw-bolder text-black-75 mt-3"> ۰۹۱۹۸۲۱۵۶۵۰</b>
      
      
    </div>

            <div className="col-md-6 text-center">
            <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
       
        <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle shadow " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            درباره ی ما
          </a>

          <ul className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
          

            <li><Link className="dropdown-item" to={"/About"}>درباره ی ما</Link></li>
            <hr />
            <li><Link className="dropdown-item" to={"/ConectUs"}>ارتباط با ما</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            
        
        <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle shadow " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                گاز ممبرد
          </a>
          <ul className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/GazMembrd"}>گاز ممبرد</Link></li>
            <li><Link className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle shadow " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          تجهیزات و قطعات
          </a>
          <ul className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        

        <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle shadow " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       کندانسینگ یونیت
          </a>
          <ul className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
        <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle shadow " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       کمپرسور
          </a>
          <ul className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
    
            </div>
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    </div>
    
            </div>
  

      <form className="d-flex col-md-3">
        <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
      </form>

    

    
    
  </div>
</nav> 
               </>
    )
}
export default Header