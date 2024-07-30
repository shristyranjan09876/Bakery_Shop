import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


    function Crousal() {
        const imgStyle = {
          width: '100%',
          height: '60%',
          objectFit: 'cover' // Ensure the images cover the entire carousel area
        };
  return (
    <Carousel>
      <Carousel.Item>
        <img  src="./src/foodcourt/imag/banner44.jpg" alt="First slide" style={imgStyle} />
        <Carousel.Caption>
    <h3>Taste the Diffrenece</h3>
        <p>We provide Best Birthday Cakes and more</p> 
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className=" " src="./src/foodcourt/imag/banner55.jpg" alt="Second slide" style={imgStyle}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="d-block "  src="./src/foodcourt/imag/banner77.jpg"  style={imgStyle} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Crousal;
