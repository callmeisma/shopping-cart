import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Inventory from "./Inventory.json";

function ProductDetail(props) {
  console.log(props);
  useEffect(() => {
    getProd();
  });

  const [prod, setProd] = useState({});

  const getProd = () => {
    let prodId = props.match.params.id;
    let result = Inventory.find(({ path }) => path === prodId);
    setProd(result);
  };

  const addCart = () => {
    props.setCart([...props.cart, prod]);
  };

  return (
    <div className="prod d-flex justify-content-start align-items-center flex-grow-1">
      <img alt={prod.name} src={prod.image} className="prod-img"></img>
      <div className="prod-det d-flex flex-column m-auto">
        <h1>{prod.name}</h1>
        <p>{prod.description}</p>
        <p>${prod.price}</p>
        <Link to="/cart">
          <button
            onClick={addCart}
            className="btn btn-dark p-3 fs-6 text-uppercase"
          >
            add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
