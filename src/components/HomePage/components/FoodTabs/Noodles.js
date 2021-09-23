import React from "react";
import "./FoodTabs.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { NoodlesInfo } from "../../../../Foods";
import FoodCard from "../Promo/PromoSlider/Slides";

function Noodles() {

  
  return (
    <div className="tab-item">
     
      <div className="sushi-item">
      <OwlCarousel className="owl-burger" loop margin={2} nav items="4">
        {NoodlesInfo.map((data, key) => {
          return (
            <div className="item">
              <FoodCard
                src={data.imageUrl}
                title={data.title}
                dataprice1={data.dataprice1}
                dataprice2={data.dataprice2}
                dataprice3={data.dataprice3}
                recipe={data.recipe}
                price={data.price}
              />
            </div>
          );
        })}
      </OwlCarousel>
      </div>
    </div>
  );
}


export default Noodles;
