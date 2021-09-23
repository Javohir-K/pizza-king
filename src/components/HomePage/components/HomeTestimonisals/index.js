import React from "react";
import "./Testimonials.css"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function index() {
  return (
    <div className="testimonials-wrapper">
      <h2>Testimonials</h2>
      <OwlCarousel className="owl-testimonial" loop items={1} nav>
        <div className="item">
            <TestimonialCard text="Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him."
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Jessica Alba"
          />
        </div>
        <div className="item">
            <TestimonialCard
            text="The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="John Doe"
            />
        </div>
        <div className="item">
            <TestimonialCard
            text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog."
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Charlize Theron"
           />
        </div>
      </OwlCarousel>
    </div>
  );
}

const TestimonialCard =({text,src, name})=>{
    return(
        <div className="testimonial-card">
            <p>{text}</p>
            <img src={src} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default index;
