import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="checkout d-flex flex-column flex-grow-1 align-items-center justify-content-center">
      <h1 className="text-white fw-bold display-3">Checkout</h1>
      <p className="text-white fw-lighter fs-6 p-2">
        Payments not accepted at this time.
      </p>
      <Link to="/cart">
        <button className="btn btn-light p-3 my-2 fs-6 text-uppercase">
          back
        </button>
      </Link>
    </div>
  );
}

export default Checkout;
