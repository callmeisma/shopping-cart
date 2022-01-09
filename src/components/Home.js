import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <h1 className="text-white fw-bold display-3">Premium Classic</h1>
      <h2 className="text-white fw-lighter fs-4 p-2">
        New Collection of Summer
      </h2>
      <div className="button-group">
        <Link to="/shop">
          <button className="btn btn-light p-3 m-2 fs-6 text-uppercase">
            products
          </button>
        </Link>
        <Link to="/about">
          <button className="btn btn-light p-3 m-2 fs-6 text-uppercase">
            about
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
