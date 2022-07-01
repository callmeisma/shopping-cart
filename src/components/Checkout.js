import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="checkout d-flex flex-grow-1 align-items-center justify-content-evenly">
      <div className="bg-secondary d-flex rounded">
        <div className="d-flex flex-column p-5">
          <h3 className="text-white">Billing Address</h3>
          <label for="fname" className="text-white">Full Name</label>
          <input type="text" className="rounded border-0 p-1" id="fname" name="firstname" placeholder="John M. Doe"/>
          <label for="email" className="text-white">Email</label>
          <input type="text" className="rounded border-0 p-1" id="email" name="email" placeholder="john@example.com"/>
          <label for="adr" className="text-white">Address</label>
          <input type="text" className="rounded border-0 p-1" id="adr" name="address" placeholder="542 W. 15th Street"/>
          <label for="city" className="text-white">City</label>
          <input type="text" className="rounded border-0 p-1" id="city" name="city" placeholder="New York"/>
        </div>
        <div className="p-5 d-flex flex-column align-items-center justify-content-center">
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
      </div>
    </div>
  );
}

export default Checkout;
