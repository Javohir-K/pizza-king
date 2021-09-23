import React, { useState } from "react";
import "./FoodTabs.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { PizzaInfo } from "../../../../Foods";
import FoodCard from "../Promo/PromoSlider/Slides";

function Pizza() {
  const [content, setContent] = useState(<AllPizza />);

  function TabPanel(e) {
    var x = document.querySelectorAll(".tab-item-panel .tab-link");
    for (let j = 0; j < x.length; j++) {
      x[j].classList.remove("tab-panel-active");
      x[j].classList.add("tab-panel-disactive");
    }
    e.target.classList.remove("tab-panel-disactive");
    e.target.classList.add("tab-panel-active");
  }
  return (
    <div className="tab-item">
      <div className="tab-item-panel">
        <button
          className="tab-link tab-panel-active"
          onClick={(e) => {
            setContent(<AllPizza />);
            TabPanel(e);
          }}
        >
          All
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setContent(<SpicyPizza />);
            TabPanel(e);
          }}
        >
          Spicy
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setContent(<VegPizza />);
            TabPanel(e);
          }}
        >
          Vegetarian
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setContent(<MushPizza />);
            TabPanel(e);
          }}
        >
          Mushrooms
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setContent(<MeatPizza />);
            TabPanel(e);
          }}
        >
          Meat
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setContent(<SeaPizza />);
            TabPanel(e);
          }}
        >
          Seafood
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export const AllPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger" loop margin={2} nav items="4">
        {PizzaInfo.map((data, key) => {
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
  );
};

export const SpicyPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " margin={2} nav items="4">
        {PizzaInfo.filter((data) => data.type === "spicy").map((data, key) => {
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
  );
};
export const VegPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " margin={2} nav items="4">
        {PizzaInfo.filter(
          (data) => data.type === "veg" || data.type2 === "veg"
        ).map((data, key) => {
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
  );
};
export const MushPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " margin={2} nav items="4">
        {PizzaInfo.filter((data) => data.type === "mush"|| data.type3==="mush").map((data, key) => {
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
  );
};
export const MeatPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " margin={2} nav items="4">
        {PizzaInfo.filter((data) => data.type === "meat"||data.type2==="meat").map((data, key) => {
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
  );
};
export const SeaPizza = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " margin={2} nav items="4">
        {PizzaInfo.filter((data) => data.type === "sea" || data.type2==="sea").map((data, key) => {
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
  );
};

export default Pizza;
