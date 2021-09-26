import React from "react";
import "./FoodCard.css";
import cartImg from "../../images/add-to-basket.png";

import { Link } from "react-router-dom";

function Slides({
  src,
  title,
  recipe,
  dataprice1,
  dataprice2,
  dataprice3,
  price,
  link
}) {
  function makeActive(e) {
    var x = e.target.parentElement;
    var y = x.querySelectorAll("button");
    var z = e.target.getAttribute("data-price");
    for (let i = 0; i < y.length; i++) {
      y[i].classList.remove("button-active");
    }
    e.target.classList.add("button-active");

    var w = e.target.parentElement.parentElement;
    w = w.querySelector(".price-label p");

    w.innerHTML = "$" + z;
  }
  function makeActive1(e) {
    var x = e.target.parentElement;
    var y = x.querySelectorAll("button");
    for (let i = 0; i < y.length; i++) {
      y[i].classList.remove("button-active");
    }
    e.target.classList.add("button-active");
  }

  return (
    <div className="slide-card">
      <div className="slide-card-wrapper">
        <div className="slide-card-content-top">
          <Link to={link}>
          <img src={src} alt="" />
          </Link>
        </div>
        <div className="slide-card-content-bottom">
          <h1>{title}</h1>
          <p>{recipe}</p>
          <div className="slide-card-buttons">
            <div className="top-buttons">
              <button className="button-active" onClick={makeActive1}>
                thin
              </button>
              <button onClick={makeActive1}>thick</button>
            </div>
            <div className="bottom-buttons">
              <button
                className="button-active"
                onClick={makeActive}
                data-price={dataprice1}
              >
                25cm
              </button>
              <button onClick={makeActive} data-price={dataprice2}>
                30cm
              </button>
              <button onClick={makeActive} data-price={dataprice3}>
                35cm
              </button>
            </div>
            <div className="price-label" id="price">
              <p>{price}</p>
            </div>
            <div className="add-to-cart-button">
              <button>
                <img src={cartImg} alt="" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slides;
