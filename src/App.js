import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import About from "./components/About";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([
    {
      "name": "Glasses",
      "description": "Solid wood glasses",
      "path": "glasses",
      "image": "",
      "price": 20        
    },
    {
      "name": "Glasses",
      "description": "Solid wood glasses",
      "path": "glasses",
      "image": "",
      "price": 20        
    },
    {
        "name": "Hat",
        "description": "Top of the morning",
        "path": "hat",
        "image": "",
        "price": 10        
    }
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Nav cart={cart}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path='/cart' render={() => (<Cart cart={cart} setCart={setCart}/>)}/>
            <Route path="/shop/:id" render={(props) => (<ProductDetail {...props} cart={cart} setCart={setCart}/>)}/>
            <Route path="/checkout" exact component={Checkout}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;