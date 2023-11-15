import "./Home.css"
import React, { useState, useEffect } from 'react';
import Scrollup from "../../components/scrollup/Scrollup";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const Home = ()=>{
    
    

  return (
    <>
       

  
      <img src="src/img/1.jpg" className="d-block w-100 " alt="'red rose" />
  
 

        
<div className="position shadow-lg mt-0 m-3">

    <img src="src/img/borderf.png" className="w-100" alt="" />


    
  <div className="display-1 text-center text-success fw-bolder" id="welcome">
    به فروشگاه
    <br /> گل <span>سِ</span>تان خوش آمدید
  </div>
</div>
  <hr />
  
    <div className="container">


  <div className="display-4 fw-bold text-center text-success titr">گل <span>سِ</span>تان</div>
<br />


  <p className="text-center">   
  گل و گیاه تازه و با کیفیت از ویژگی های مهم یک گلفروشی محسوب می شود. علاوه بر آن، تنوع محصولات برای مناسب های مختلف به شما کمک میکند تا بهترین انتخاب را داشته باشید.
با خرید گل یا خرید گیاهان اپارتمانی، عزیزان خود را در هر کجا که هستند سوپرایز کنید و حس لذت بخشی به آنها هدیه دهید.
گلفروشی شرمیلا جزو گل فروشی های آنلاین تهران میباشد که با توجه به تنوع محصولات به شما حق انتخاب انواع دسته گل ، سبد گل ، باکس گل ، تاج گل ، جام گل ، گلدان گل و گیاه ، بسته های گل و شکلات و رز جاودان را برای مناسبت های مختلف اعم از هدیه تولد ، عرض تبریک ، ترحیم و تسلیت ، افتتاحیه فروشگاه ، روز مادر ، روز پدر ، برای همسر با قیمت ارزان و مناسب ارائه می دهد.
گل فروشی آنلاین ۲۴ ساعته شرمیلا محصولات متنوعی را ارائه می دهد. برای هدیه دادن گل های تازه و با کیفیت در تمامی مراسمات میتوانید خرید خود را اینترنتی انجام دهید و در سریعترین زمان ممکن سفارش خود را تحویل بگیرید. در حال حاضر امکان سفارش گل آنلاین تهران فراهم می باشد. همچنین می توانید سفارش آنلاین گل از خارج کشور داشته باشید. در واقع برای ارسال گل به ایران میتوانید از خارج کشور با امکان پرداخت ارزی محصول مد نظر خود را سفارش دهید.
سایت گلستان از معتبرین گل فروشی های آنلاین تهران می باشد. مجموعه گلستان دارای نماد اعتماد کسب و کار از مركز توسعه تجارت الكترونیكی وزارت صنعت، معدن و تجارت می باشد.
  </p>
  
  </div>
 
  
  

  

<br />
<br />

    




<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideshadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper shadow-lg"
      >
        <SwiperSlide>
          <img src="src/img/image.png"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/image7.jpg" />
        </SwiperSlide>

      </Swiper>



<div className="container-fluid bg-light ">
  <div className="row">
<div className="col-md-6 my-5">
<div className="justify-content-center d-flex">


<div className="card text-center" style={{maxWidth: 50 + "%"}} >
  <div className="card-body" >
    <h5 className="card-title"><img src="src/img/a.png"  alt="fellower" width={150 + "rem"}  /></h5>
    <p className="card-text">ساخت و ساز ما بهترین کیفیت انجام شده صورت میگیرد برای دیدن بخشی از کار کلیک کنید</p>
    <a href="#" className="btn btn-success bg-success ">کلیک شود</a>
  </div>
</div>
</div>
</div>
<div className="col-md-5 my-5">
  <div className="text-center">
    
    <h2 className="text-success"> تنها در گل<span>ستان</span></h2>
    <br />
  <p>تنها در گلستان شاهد این سطح از کیفیت در عرصه بین اللمل هستیم
    دارنده بهترین تیم تولید و ساخت محصولات با کیفیت
    ما شاهد هستیم که در ضمینه محصولات بدون هیچ نقضی وارد عرصه تاسیسات ما شده و از جانب این بنده بنظر میرسه رقبا در سطح ما نیستن
    با ما همراه باشید تا شاهد تولید و ساخت مراحل باشید
  </p>
  </div>
</div>
  </div>
</div>


<div className="bg-light shadow-lg">
<nav id="navbar-example2" className="navbar navbar-light bg-light text-center ">
<div className="navbar-brand text-success fw-bolder">
<img className="shadow-lg mx-4 " src="src/img/logo.png" alt="" id="logo" />
  گلستان

</div>
  <ul className="nav nav-pills row justify-content-center d-flex container-fluid">
    <li className="nav-item col-md-2 ">
      <a className="nav-link text-success" href="#scrollspyHeading1">باکس های گل</a>
    </li>
    <li className="nav-item col-md-2 ">
      <a className="nav-link text-success" href="#scrollspyHeading2">گیاهای خونگی</a>
    </li>
    <li className="nav-item  col-md-2 ">
      <a className="nav-link text-success" href="#scrollspyHeading3">گل های تزئینی</a>
    </li>
    <li className="nav-item  col-md-2 ">
      <a className="nav-link text-success" href="#scrollspyHeading4">انواع کاکتوس</a>
    </li>
   
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example text-center" tabIndex="0">
  <br />
  <br />
  <br />
  {/* swipe fllower box */}

  <h3 id="scrollspyHeading1" className="fw-bolder m-3">باکسای جذاب گل</h3>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-0 w-100 bg-danger bg-opacity-75"
      >
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
       
      </Swiper>
  <hr />
  {/* apartemant fllower */}
  <br />
  <h3 id="scrollspyHeading2" className="fw-bolder m-3">گیاهای خونگی</h3>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-0 w-100 bg-success bg-opacity-75"
      >
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
       
      </Swiper>
  <hr />
  {/* decorative flowers */}
 <br />
 <h3 id="scrollspyHeading3" className="fw-bolder m-3">گل های تزئینی</h3>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-0 w-100 bg-danger bg-opacity-75"
      >
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div></SwiperSlide>
       
      </Swiper>

      <hr />
  {/* kind  */}
  <br />
  <h3 id="scrollspyHeading4" className="fw-bolder m-3">انواع کاکتوس</h3>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-0 w-100 bg-success bg-opacity-75"
      >
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card  shadow" >
  <img src="src/img/image.png" className="card-img-top h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Go somewhere</a>
  </div>
</div></SwiperSlide>
       
      </Swiper>

</div>
<br />
  <hr />
</div>

<div className="display-1 text-center text-success fw-bolder" id="ending">
     فروشگاه گل<span>سِ</span>تان  
  </div>

  <img src="src/img/ending1.png" className="" width={100 + "%"} />


       
       

        <Footer/>
        </>
    )
  }
  
export default Home