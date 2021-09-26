import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import PizzaPage from "./components/FoodPages/PizzaPage";
import BurgerPage from "./components/FoodPages/BurgerPage";
import SushiPage from "./components/FoodPages/SushiPage";
import NoodlesPage from "./components/FoodPages/NoodlesPage";
import SteaksPage from "./components/FoodPages/SteaksPage";
import DessertsPage from "./components/FoodPages/DessertsPage";
import DrinksPage from "./components/FoodPages/DrinksPage";
import FoodInfoCard from "./components/FoodInfoCard";
import LoadingPage from "./components/LoadingPage";
import MyCartPage from "./components/MyCartPage";

import {
  PizzaInfo,
  BurgerInfo,
  SushiInfo,
  NoodlesInfo,
  SteaksInfo,
  DessertInfo,
  DrinksInfo,
} from "./Foods";

import ScrollToTop from "./ScrollTop";
import { AnimatedSwitch } from "react-router-transition";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, [3000]);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return this.state.isLoading ? (
      <LoadingPage />
    ) : (
      <div className="app">
        <ScrollToTop />
        <Header />
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/pizza">
              <PizzaPage />
            </Route>
            <Route path="/burgers">
              <BurgerPage />
            </Route>
            <Route path="/sushi">
              <SushiPage />
            </Route>
            <Route path="/noodles">
              <NoodlesPage />
            </Route>
            <Route path="/steaks">
              <SteaksPage />
            </Route>
            <Route path="/desserts">
              <DessertsPage />
            </Route>
            <Route path="/drinks">
              <DrinksPage />
            </Route>
            {PizzaInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Pizza"
                    parentPage="/pizza"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Pizza"
                  />
                </Route>
              );
            })}
            {BurgerInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Burger"
                    parentPage="/burgers"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Burger"
                  />
                </Route>
              );
            })}
            {SushiInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Sushi"
                    parentPage="/sushi"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Sushi"
                  />
                </Route>
              );
            })}
            {NoodlesInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Noodles"
                    parentPage="/noodles"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Noodles"
                  />
                </Route>
              );
            })}
            {SteaksInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Steaks"
                    parentPage="/steaks"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Steak"
                  />
                </Route>
              );
            })}
            {DessertInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Desserts"
                    parentPage="/desserts"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Desserts"
                  />
                </Route>
              );
            })}
            {DrinksInfo.map((data, key) => {
              return (
                <Route exact path={data.link}>
                  <FoodInfoCard
                    page={data.title}
                    thisPage={data.link}
                    parent="Drinks"
                    parentPage="/drinks"
                    img={data.imageUrl1}
                    title={data.title}
                    recipe={data.recipe}
                    price={data.price}
                    category="Drinks"
                  />
                </Route>
              );
            })}

            <Route path="/cart">
              <MyCartPage />
            </Route>
          </AnimatedSwitch>
        </Switch>
        <Footer />
        <ScrollButton />
      </div>
    );
  }
}

export default App;
