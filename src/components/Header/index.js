import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import pizzaImg from "./images/pizza-slice.png";
import burgerImg from "./images/cheese-burger.png";
import sushiImg from "./images/sushi-roll.png";
import noodleImg from "./images/noodle.png";
import steakImg from "./images/steak.png";
import dessertImage from "./images/cake.png";
import drinkImg from "./images/cuba-libre.png";
import cartImg from "./images/add-to-basket.png";

function index() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <Link to="/pizza">
              <img src={pizzaImg} alt="" />
              Pizza
            </Link>
          </li>
          <li>
            <Link to="/burgers">
              <img src={burgerImg} alt="" />
              Burgers
            </Link>
          </li>
          <li>
            <Link to="/sushi">
              <img src={sushiImg} alt="" />
              Sushi
            </Link>
          </li>
          <li>
            <Link to="/noodles">
              <img src={noodleImg} alt="" />
              Noodles
            </Link>
          </li>
          <li>
            <Link to="/steaks">
              <img src={steakImg} alt="" />
              Steaks
            </Link>
          </li>
          <li>
            <Link to="/desserts">
              <img src={dessertImage} alt="" />
              Desserts
            </Link>
          </li>
          <li>
            <Link to="/drinks">
              <img src={drinkImg} alt="" />
              Drinks
            </Link>
          </li>
        </ul>
      </div>
      <div className="header_cart">
          <Link to="/cart">
        <img src={cartImg} alt="" />
          </Link>
      </div>
    </div>
  );
}

export default index;
