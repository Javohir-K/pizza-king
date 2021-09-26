import React from "react";
import "./CardPages.css";
import { Foods } from "./RecFoods";

function index({ pages }) {
  return (
    <div className="cardpage-main">
      <div className="cardpage-sidebar">
        <div className="filtering">
          <h3>Filter by price</h3>
          <div className="filter-buttons">
            <button>+10$</button>
            <button>+20$</button>
            <button>+30$</button>
          </div>
          <p>Price: $10-30$</p>
          <button className="filter-btn">Filter</button>
        </div>
        <div className="sidebar-recommendation">
          <h3>We recommend</h3>
          <div className="rec-items">
            {
                Foods.map((data, key)=>{
                    return(
                        <RecItems
                        img={data.img}
                        title={data.title}
                        price={data.price}
                        />
                    )
                })
            }
          </div>
        </div>
      </div>
      <div className="cardpage-items">{pages}</div>
    </div>
  );
}

const RecItems = ({ img, title, price }) => {
  return (
    <div className="rec-food">
      <img src={img} alt="" />
      <div className="rec-info">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default index;
