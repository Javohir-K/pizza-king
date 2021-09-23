import React, { useState } from "react";
import "./FoodTabs.css";

//Components
import Burger from "./Burger";
import Pizza from "./Pizza";
import Sushi from "./Sushi";
import Noodles from "./Noodles";

function FoodTabs() {
  const [content, setContent] = useState(<Burger />);
  function Tab(e) {
    var w = document.querySelectorAll(".tab-list-btn ul li button");

    for (let j = 0; j < w.length; j++) {
      w[j].style.opacity = "0.5";
    }
    e.target.style.opacity = "1";
  }

  return (
    <div className="food-tabs">
      <div className="tab-list-btn">
        <ul>
          <li>
            <button
              style={{ opacity: 1 }}
              onClick={(e) => {
                setContent(<Burger />);
                Tab(e);
              }}
            >
              Burger
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                setContent(<Pizza />);
                Tab(e);
              }}
            >
              Pizza
            </button>
          </li>
          <li>
            <button onClick={(e)=>{setContent(<Sushi/>);Tab(e)}}>Sushi</button>
          </li>
          <li>
            <button onClick={(e)=>{setContent(<Noodles/>);Tab(e)}}>Noodles</button>
          </li>
        </ul>
      </div>
      <div className="tab-items">{content}</div>
    </div>
  );
}

export default FoodTabs;
