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
    <Scrollup></Scrollup>    

  
      <img src="src/img/1.jpg" className="d-block w-100 " alt="'red rose" />
  
 

        
<div className="position shadow-lg mt-0 m-3">

    <img src="src/img/borderf.png" className="w-100" alt="" />
  <div className="display-1 text-center text-success fw-bolder" id="welcome">
    به فروشگاه
    <br /> گل <span>سِ</span>تان خوش آمدید
  </div>
</div>
  <hr />
  <div className="container ">
    <div className="row">

<div className="col-md-6">
  <br />
  <br />

  <div className="display-4 fw-bold text-center text-success titr">گل <span>سِ</span>تان</div>
  <br />

  <p>  
  گل و گیاه تازه و با کیفیت از ویژگی های مهم یک گلفروشی محسوب می شود. علاوه بر آن، تنوع محصولات برای مناسب های مختلف به شما کمک میکند تا بهترین انتخاب را داشته باشید.
با خرید گل یا خرید گیاهان اپارتمانی، عزیزان خود را در هر کجا که هستند سوپرایز کنید و حس لذت بخشی به آنها هدیه دهید.
گلفروشی شرمیلا جزو گل فروشی های آنلاین تهران میباشد که با توجه به تنوع محصولات به شما حق انتخاب انواع دسته گل ، سبد گل ، باکس گل ، تاج گل ، جام گل ، گلدان گل و گیاه ، بسته های گل و شکلات و رز جاودان را برای مناسبت های مختلف اعم از هدیه تولد ، عرض تبریک ، ترحیم و تسلیت ، افتتاحیه فروشگاه ، روز مادر ، روز پدر ، برای همسر با قیمت ارزان و مناسب ارائه می دهد.
گل فروشی آنلاین ۲۴ ساعته شرمیلا محصولات متنوعی را ارائه می دهد. برای هدیه دادن گل های تازه و با کیفیت در تمامی مراسمات میتوانید خرید خود را اینترنتی انجام دهید و در سریعترین زمان ممکن سفارش خود را تحویل بگیرید. در حال حاضر امکان سفارش گل آنلاین تهران فراهم می باشد. همچنین می توانید سفارش آنلاین گل از خارج کشور داشته باشید. در واقع برای ارسال گل به ایران میتوانید از خارج کشور با امکان پرداخت ارزی محصول مد نظر خود را سفارش دهید.
سایت گلستان از معتبرین گل فروشی های آنلاین تهران می باشد. مجموعه گلستان دارای نماد اعتماد کسب و کار از مركز توسعه تجارت الكترونیكی وزارت صنعت، معدن و تجارت می باشد.
  </p>
  
  </div>
  <div className="col-md-1"></div>
  
  <div className="col-md-5 mt-5">
 <br />
<h1 className="h1 text-center">گل بافنکا</h1>
 <br />
 <br />
 <div className="justify-content-center d-flex">

  <img src="src/img/2.jpg" className="imgthumbnail m-1" alt="..." />
  <img src="src/img/3.jpg" className="imthumbnail m-1" alt="..." />
 </div>
 <div className="justify-content-center d-flex">
  <img src="src/img/4.jpg" className="imgumbnail m-1" alt="..." />
  <img src="src/img/5.jpg" className="img-thmbnail m-1" alt="..." />
  </div>
  
  </div>
</div>
<br />
<br />

    </div>




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
    <h5 className="card-title"><i className="bi-gear-wide-connected display-1 text-success"></i></h5>
    <p className="card-text">ساخت و ساز ما بهترین کیفیت انجام شده صورت میگیرد برای دیدن بخشی از کار کلیک کنید</p>
    <a href="#" className="btn btn-success bg-success ">کلیک شود</a>
  </div>
</div>
</div>
</div>
<div className="col-md-5 my-5">
  <div className="text-center">
    
    <h3> تنها در کیانسرما</h3>
    <br />
  <p>تنها در کیانسرما شاهد این سطح از کیفیت در عرصه بین اللمل هستیم
    دارنده بهترین تیم تولید و ساخت محصولات با کیفیت
    ما شاهد هستیم که در ضمینه محصولات بدون هیچ نقضی وارد عرصه تاسیسات ما شده و از جانب این بنده بنظر میرسه رقبا در سطح ما نیستن
    با ما همراه باشید تا شاهد تولید و ساخت مراحل باشید
  </p>
  </div>
</div>
  </div>
</div>


<div className="container-fluid bg-light">
<nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
<div className="navbar-brand text-success fw-bolder">
<img className="shadow-lg mx-4 " src="src/img/cropped-download.png" alt="" id="logo" />
  کیانسرما

</div>
  <ul className="nav nav-pills">
    <li className="nav-item mx-2">
      <a className="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li className="nav-item mx-2">
      <a className="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li className="nav-item dropdown me-4">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example text-center" tabIndex="0">
  <br />
  <br />
  <br />
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in molestias dolor aspernatur, cum sapiente, ducimus itaque accusamus ratione nobis ea officiis maxime voluptate porro blanditiis rerum amet repellendus magnam?</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos quis reiciendis pariatur voluptates libero, odio fugiat laudantium minus sint, quisquam aspernatur ab cumque. Architecto ipsam officia nesciunt asperiores sequi?</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempora provident cum quaerat ab accusamus. Nulla similique perspiciatis alias molestiae, ex ut, quisquam pariatur, error velit reprehenderit eius quibusdam cum?</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic eveniet dolor quisquam perferendis tempore atque obcaecati, ipsa mollitia rem nihil similique, pariatur praesentium delectus quaerat perspiciatis error, cupiditate recusandae!</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum reiciendis ut exercitationem alias provident aliquid id, ratione dolores expedita labore sit distinctio quo illo, aut nobis. Quisquam, ducimus earum?</p>
</div>
<br />
</div>



       <Footer/>
       

        </>
    )
  }
  
export default Home