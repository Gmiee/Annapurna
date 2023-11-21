import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/06.jpg';
import img2 from '../Assets/02.jpg';
import img3 from '../Assets/03.jpg';
import img4 from '../Assets/04.jpg';
import img5 from '../Assets/05.jpg';
import img6 from '../Assets/01.JPG';
import img7 from '../Assets/07.JPG';
import About from './About';

const Home = () => {
  return (
    <>
      <div className="c">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={true}
        >
          <div>
            <img src={img1} alt="img01" />
          </div>
          <div>
            <img src={img5} alt="img05" />
          </div>
          <div>
            <img src={img2} alt="img02" />
          </div>
          <div>
            <img src={img3} alt="img03" />
          </div>
          <div>
            <img src={img4} alt="img04" />
          </div>
          <div>
            <img src={img6} alt="img06" />
          </div>
          <div>
            <img src={img7} alt="img07" />
          </div>
        </Carousel>
        <About/>
      </div>
    </>
  );
};

export default Home;
