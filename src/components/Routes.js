import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={Shop} />
      <Route
        path="/cart"
        render={() => <Cart cart={props.cart} setCart={props.setCart} />}
      />
      {/* <Route
        path="/shop/:id"
        render={(props) => (
          <ProductDetail {...props} cart={props.cart} setCart={props.setCart} />
        )}
      /> */}
      <Route
        path="/shop/:id"
        render={(e) => (
          <ProductDetail {...e} cart={props.cart} setCart={props.setCart} />
        )}
      />
      <Route path="/checkout" exact component={Checkout} />
    </Switch>
  );
}
export default Routes;
