import React from "react";
import h from './home.module.css'
import niveni from './slidercomp/niveni.png'
import slide from './slidercomp/slide-1.jpg'
import page3 from './slidercomp/niveni-page.png'
import {Carousel} from "./slidercomp/ImageSlider";



function Home(){
        
    return(
        
            
            <Carousel>
                <img src={niveni} alt='Niveni' className={h.carouselDiv}/>
                <img src={slide} alt='Niveni' className={h.carouselDiv}/>
                <img src={page3} alt='Niveni' className={h.carouselDiv}/>
            </Carousel>
       
    )
}

export default Home;