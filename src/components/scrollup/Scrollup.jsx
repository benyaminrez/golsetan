import "./Scrollup.css"
import React, { useState, useEffect } from 'react';

const ScrollUp = ()=>{
  
  
    const [showTopBtn, setShowTopBtn] = useState(false);
   


    useEffect(() => {
        let scroll_top = $('.up');
        $(window).scroll(function() {
    
            if( $(window).scrollTop() > 200 ) {
                scroll_top.show(300);
            } else {
                scroll_top.hide(300);
            }
    
        });
        window.addEventListener('.up', () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
                showTopBtn.show(300);
            } else {
                setShowTopBtn(false);
                showTopBtn.hide(300);
            }
            
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return(
        <>
        <div className="up" onClick={goToTop}>

         <i className="bi bi-airplane-engines h1"></i>

        </div>
        </>
    )
}
export default ScrollUp