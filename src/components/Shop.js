import React from "react";
import Inventory from "./Inventory.json";
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <div className="shop d-flex flex-column">
      <div className="shop-products d-flex justify-content-center flex-wrap p-4">
        {Inventory.map((product) => (
          <div key={product.name} className="card m-3 p-0 border-light">
            <NavLink to={`/shop/${product.path}`}>
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between text-black">
                  <div className="p-2">
                    <p className="m-0 p-0">{product.name}</p>
                    <p className="m-0 p-0">{product.description}</p>
                  </div>
                  <div className="p-2">
                    <p className="m-0 p-0">${product.price}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="soon d-flex flex-column justify-content-center align-items-center p-4">
        <h3 className="fs-3 fw-bold">Want to see more products</h3>
        <p className="fw-lighter">Sign up to be the first to know</p>
        <button disabled className="p-2 text-uppercase">
          sign up
        </button>
      </div>
    </div>
  );
}

export default Shop;
