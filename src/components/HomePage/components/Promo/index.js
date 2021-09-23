import React from "react";
import "./Promo.css";

//Components
import PromoSlider from "./PromoSlider"

//Images
import ImageChef from "./images/promo-chef.jpg"
import ImagePromo1 from "./images/promo1.jpg"
import ImageBg1 from "./images/bg1.png"
import ImageBgLeaf from "./images/bg-leaf.png"

function Promo() {

  return <div className="home-promo">
      <div className="promo_left">
        <img src={ImageBg1} alt="aa" className="image-1" />
        <img src={ImageBgLeaf} alt="aa" className="image-2" />
        <img src={ImagePromo1} alt="aa" className="image-4" />
      <div className="promo_left_wrapper">

        <img src={ImageChef} alt="aa"  className="image-3" />
        <h2>
            <span>
                Louis McKay
            </span>
            <p>
                "chief"
            </p>
        </h2>
      </div>
      </div>
      <div className="promo_right">
        <PromoSlider/>
      </div>
  </div>;
}

export default Promo;
