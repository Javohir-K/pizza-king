import React, { useState } from "react";
import "./FoodTabs.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BurgerInfo } from "../../../../Foods";
import FoodCard from "../Promo/PromoSlider/Slides";

function Burger() {
  const [tab, setTab] = useState(<AllBurger />);
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
    <div className="burger-item">
      <div className="tab-item-panel">
        <button
          className="tab-link tab-panel-active"
          onClick={(e) => {
            setTab(<AllBurger />);
            TabPanel(e);
          }}
        >
          All
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setTab(<SpicyBurger />);
            TabPanel(e);
          }}
        >
          Spicy
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setTab(<MeatBurger />);
            TabPanel(e);
          }}
        >
          Meat
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setTab(<FishBurger />);
            TabPanel(e);
          }}
        >
          Fish
        </button>
        <button
          className="tab-link"
          onClick={(e) => {
            setTab(<ChickenBurger />);
            TabPanel(e);
          }}
        >
          Chicken
        </button>
      </div>
      <div>{tab}</div>
    </div>
  );
}

export const AllBurger = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger " loop margin={2} nav items="4">
        {BurgerInfo.map((data, key) => {
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
export const SpicyBurger = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger" margin={2} nav items="4">
        {BurgerInfo.filter((data) => data.type === "spicy").map((data, key) => {
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

export const MeatBurger = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger" margin={2} nav items="4">
        {BurgerInfo.filter(
          (data) => data.type === "meat" || data.type2 === "meat"
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
const FishBurger = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger" margin={2} nav items="4">
        {BurgerInfo.filter((data) => data.type === "fish").map((data, key) => {
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
const ChickenBurger = () => {
  return (
    <div>
      <OwlCarousel className="owl-burger" margin={2} nav items="4">
        {BurgerInfo.filter((data) => data.type2 === "chicken").map(
          (data, key) => {
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
          }
        )}
      </OwlCarousel>
    </div>
  );
};

export default Burger;
