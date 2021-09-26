import React from "react";
import "./FoodInfoCard.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../../images/add-to-basket.png";

function index({
  page,
  parent,
  parentPage,
  thisPage,
  img,
  title,
  recipe,
  price,
  category,
}) {
  return (
    <div className="foodinfocard">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>-</span>
        <Link to={parentPage}>{parent}</Link>
        <span>-</span>
        <Link to={thisPage}>{page}</Link>
      </div>
      <div className="foodinfocard-inner">
        <div className="foodinfo-left">
          <img src={img} alt="" />
        </div>
        <div className="foodinfo-right">
          <h2 className="foodinfo-title">{title}</h2>
          <p className="recipe">{recipe}</p>
          <div className="nutritional-facts">
            <h3>Nutritional facts</h3>
            <p>
              Serving size 1 slice (63g) <br />
              Per Serving: <br />
              Calories: 168 <br />
              Total Fat: 4.7g <br />
              Carbohydrates: 20.4g <br />
              Protein: 7.6g
            </p>
          </div>
          <div className="foodinfo-bottom">
            <p className="price">{price}</p>
            <button className="add-to-cart">
              <img src={AddToCartButton} alt="" />
              Add to Cart
            </button>
            <p className="category">Category: {category}</p>
          </div>
        </div>
      </div>
      <div className="main-info-bottom">
        <div className="additional-info">
          <h2>Additional information</h2>
          <ul>
            <li>
              <p className="name">Crust</p>
              <p className="info">thin, thick</p>
            </li>
            <hr />
            <li>
              <p className="name">Size</p>
              <p className="info">25cm,30cm,35cm</p>
            </li>
            <hr />
            <li>
              <p className="name">Product icons</p>
              <p className="info">Spicy, Meat</p>
            </li>
          </ul>
        </div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nihil
          porro laboriosam aspernatur repellendus ipsum consequuntur saepe
          tempore voluptatem inventore ab magni, dolore vitae libero ullam id
          assumenda, placeat, eius eveniet maxime debitis. Similique beatae
          debitis laboriosam eos ducimus architecto. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Illo, magnam accusantium! Reprehenderit
          tempore sunt, ea sint at nemo consequuntur, suscipit magnam soluta
          nesciunt voluptas. Corrupti ullam blanditiis iste nostrum ad quam
          aperiam, facilis at sit reiciendis ab velit earum ratione?
        </p>
      </div>
    </div>
  );
}

export default index;
