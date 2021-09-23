import React from "react";
import Slides from "./Slides";
import "./PromoSlider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import json file data
import { PizzaData } from "./Pizzas";

function PromoSlider() {
  
  return (
    <div className="promo-slider">
      <h1 style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
        We serve Passion
      </h1>
        
      <OwlCarousel className="owl-theme" items="2" margin={2} nav>
        {
          PizzaData.map((data,key)=>{
            return(
              <div class="item">
              <Slides
              key={data.id}
                src={data.imageUrl}
                dataprice1={data.dataprice1}
                dataprice2={data.dataprice2}
                dataprice3={data.dataprice3}
                title={data.title}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
            )
          })
        }
         
      </OwlCarousel>
    </div>
  );
}

export default PromoSlider;
