import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageSlide1 from "./images/slide1.jpg";
import ImageSlide2 from "./images/slide2.jpg";
import ImageSlide3 from "./images/slide3.jpg";
import "./Slider.css";

function index() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 slide-image"
            src={ImageSlide3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>pepperoni</h3>
            <p>spicy</p>
            <button>order now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 slide-image"
            src={ImageSlide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>burger</h3>
            <p>regular</p>
            <button>order now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 slide-image"
            src={ImageSlide1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>noodle</h3>
            <p>traditional</p>
            <button>order now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default index;
