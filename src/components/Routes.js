import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";

const Routes = (cart, setCart) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/shop" exact component={Shop} />
    <Route path="/cart" render={() => <Cart cart={cart} setCart={setCart} />} />
    <Route
      path="/shop/:id"
      render={(props) => (
        <ProductDetail {...props} cart={cart} setCart={setCart} />
      )}
    />
    <Route path="/checkout" exact component={Checkout} />
  </Switch>
);

export default Routes;
