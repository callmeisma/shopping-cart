import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Routes from "./components/Routes";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app d-flex flex-column">
      <Nav cart={cart} />
      <Routes cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
