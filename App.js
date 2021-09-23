import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton"

// When the user scrolls down 20px from the top of the document, show the button

function App() {
 
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/pizza">Pizza</Route>
        <Route path="/burgers">Burgers</Route>
        <Route path="/sushi">Sushi</Route>
        <Route path="/noodles">Noodles</Route>
        <Route path="/steaks">Steaks</Route>
        <Route path="/desserts">Desserts</Route>
        <Route path="/drinks">Drinks</Route>
        <Route path="/cart">Cart</Route>
      </Switch>
      <Footer />
      <ScrollButton/>
      </div>
  );
}

export default App;
