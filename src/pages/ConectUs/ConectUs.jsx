import Footer from "../../components/Footer/footer"

const ConectUs = ()=>{

    return(
        <>
        <div className="container-fluid bg-success bg-opacity-25 justify-content-center  d-flex" style={{height: 100 + "%"}}>
       
        <div className="row justify-content-center bg-light d-flex" style={{width:80 + "%"}}>
            
<div className="col-md-3"></div>
<div className="mb-3 col-md-6 mt-5 text-center">
  <label for="exampleFormControlTextarea1" className="form-label">نام خود را وارد کنید</label>
  <input className="form-control" id="exampleFormControlTextarea1" rows="2"></input>
</div>

<div className="col-md-3"></div>

<div className="col-md-3"></div>
        <div className="mt-4 col-md-6 text-center">
  <label for="exampleFormControlInput1" className="form-label">ایمیل خود را وارد کنید</label>
  <input type="email" className="form-control mb-5" id="exampleFormControlInput1" placeholder="name@example.com" />
<div className="col-md-3"></div>
</div>
<div className="col-md-3"></div>
<div className="col-md-3"></div>
<div className="mb-3 col-md-6 text-center">
  <label for="exampleFormControlTextarea1" className="form-label">نظر و پیشنهاد خود را برای ما ارسال کنید</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<div className="col-md-3"></div>
<div className="col-md-3"></div>

<div className="col-md-5">
    
<button className="btn btn-success">ارسال</button>
<br />
<br />

<br />
        </div>
</div>

        </div>
        <Footer />
        </>
)
}
export default ConectUs