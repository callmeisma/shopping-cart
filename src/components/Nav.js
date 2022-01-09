import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <nav className="d-flex justify-content-around p-2 align-items-center">
      <Link className="link p-2" to="/">
        <FontAwesomeIcon
          icon={faPersonBiking}
          size="2x"
          className=""
        ></FontAwesomeIcon>
      </Link>
      <ul className="d-flex list-unstyled w-25 m-0 justify-content-evenly align-items-center">
        <Link className="link" to="/about">
          <li className="fw-bold">ABOUT</li>
        </Link>
        <Link className="link" to="/shop">
          <li className="fw-bold">SHOP</li>
        </Link>
        <Link className="link" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} size="lg"></FontAwesomeIcon>
          <span className={faLayerGroup}>{props.cart.length}</span>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
