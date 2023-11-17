import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/06.jpg";
import img2 from "../Assets//02.jpg";
import img3 from "../Assets/03.jpg";
import img4 from "../Assets/04.jpg";
import img5 from "../Assets/05.jpg";
import img6 from "../Assets/01.JPG";
import img7 from "../Assets/07.JPG";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Carousel fade keyboard interval={2500} autoFocus style={{margin:'auto' }}>
      <Carousel.Item>
        <img src={img1} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img01'/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img5} style={{objectFit:'cover',aspectRatio:9/16}} alt='img05' />
      </Carousel.Item>

      <Carousel.Item>
        < img src={img2} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img02'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img03' />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img4} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img04' />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img6} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img06' />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img7} style={{objectFit:'cover',aspectRatio:9/16}}  alt='img07' />
      </Carousel.Item>

    </Carousel>
    </>
  )
}

export default Home
