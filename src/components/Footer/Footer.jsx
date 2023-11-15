import "./Footer.css"
const Footer = ()=>{

return (

    <>
  
<div className="container-fluid bg-green bg-opacity-75 text-light">
  <footer className="pt-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3 text-center ">
        
          <h3>گزینه های مهم</h3>
        <ul className="nav flex-column ">
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">خانه <i className="bi bi-house"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">نظرات <i class="bi bi-chat-heart"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">سفارشات <i className="bi bi-flower3"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">پیگیری محصول <i class="bi bi-person-raised-hand"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">محصولات پر طرفدار <i className="bi bi-bag-heart"></i></a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 text-center">
        
          <h3>ارتباط با ما</h3>
        <ul className="nav flex-column ">
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">ایمیل <i class="bi bi bi-envelope-at-fill"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">تلگرام <i class="bi bi-telegram"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">واتساپ <i class="bi bi-whatsapp"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">اینستاگرام <i class="bi bi-instagram"></i></a></li>
          <li className="nav-item m-2"><a href="#" className="nav-link p-0 text-light">آدرس حضوری <i class="bi bi-geo-alt"></i></a></li>
        </ul>
      </div>

   

      <div className="col-md-5 offset-md-1 mb-3 text-center p-0 m-0">
        <h3>لوکیشن</h3>
      <div className="mapouter text-center ">
        <div className="gmap_canvas m-3">
        <iframe className="map" src="https://maps.google.com/maps?q=iran%20tehran%20bahar%20shiraz&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" ></iframe>
        

      <p className="text-light">
        آدرس :  هفت تیر بهار شیراز کوچه حافظ
        </p>
      
 {/*      <p className="text-light">
    benyaminrez@gmail.com :ایمیل
      </p> */}
      <p className="text-light">
      شماره تماس : ۰۹۱۹۸۲۱۵۶۵۰
      </p>
        </div>

        </div>
        
      </div>

      <div className="col-md-3 text-center">
       <h3>    
     گل <span>سِ</span>تان </h3>
        
        
      <img className="my-2 map w-75 bg-light border" src="src/img/logo.png" alt=""  />
      </div>
    </div>

    <div className=" py-4 border-top ">
      <p className="text-center">&copy; کلیه حقوق این مجموعه متعلق به گل <span>سِ</span>تان
میباشد</p>
      
      
    </div>
  </footer>
</div>
    </>
)


}
export default Footer