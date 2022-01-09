import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app d-flex flex-column">
      <BrowserRouter>
        <Nav cart={cart} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route
            path="/cart"
            render={() => <Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/shop/:id"
            render={(props) => (
              <ProductDetail {...props} cart={cart} setCart={setCart} />
            )}
          />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
