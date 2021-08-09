import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import  Pic  from './Silver.JPG'

const Testimonial = () => {
    return (
        
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src={Pic} />
          <div className="myCarousel">
            <h3>Abubakar</h3>
            <h4>React js Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti. Eveniet eos quasi modi aspernatur reprehenderit, consequatur odio eligendi quis.
            </p>
          </div>
        </div>
        
        <div>
          <img src={Pic} />
          <div className="myCarousel">
            <h3>Abubakar</h3>
            <h4>React js Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti. Eveniet eos quasi modi aspernatur reprehenderit, consequatur odio eligendi quis.
            </p>
          </div>
        </div>
        <div>
          <img src={Pic} />
          <div className="myCarousel">
            <h3>Abubakar</h3>
            <h4>React js Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti. Eveniet eos quasi modi aspernatur reprehenderit, consequatur odio eligendi quis.
            </p>
          </div>
        </div>

        
      </Carousel>
    );
  }


export default Testimonial
