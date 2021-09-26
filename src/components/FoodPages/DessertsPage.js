import React from "react";
import "./Pages.css";
//components
import CardPages from "../CardPages";
import { Link } from "react-router-dom";
import { DessertInfo } from "../../Foods";
import FoodCard from "../FoodCard";

function index() {
  return (
    <div className="main-container">
      <FoodHeader title="Desserts" />
      <CardPages pages={<FoodList />}  />
    </div>
  );
}

const FoodHeader = ({ title }) => {
  return (
    <div className="pages-header">
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>-</span> <Link to="/desserts">Desserts</Link>
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const FoodList = () => {
  return (
    <div className="food-list">
      {DessertInfo.map((data, key) => {
        return (
          <div className="item btnHide">
            <FoodCard
              src={data.imageUrl}
              title={data.title}
              dataprice1={data.dataprice1}
              dataprice2={data.dataprice2}
              dataprice3={data.dataprice3}
              recipe={data.recipe}
              price={data.price}
              link={data.link}

            />
          </div>
        );
      })}
    </div>
  );
};

export default index;
