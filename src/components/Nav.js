import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <nav className="d-flex justify-content-around p-2 align-items-center">
      <NavLink exact className="link p-2" to="/">
        <FontAwesomeIcon
          icon={faPersonBiking}
          size="2x"
          className=""
        ></FontAwesomeIcon>
      </NavLink>
      <ul className="d-flex list-unstyled w-25 m-0 justify-content-evenly align-items-center">
        <NavLink className="link" to="/about">
          <li className="fw-bold px-2">ABOUT</li>
        </NavLink>
        <NavLink className="link" to="/shop">
          <li className="fw-bold px-2">SHOP</li>
        </NavLink>
        <NavLink className="link" to="/cart">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="px-1"
            ></FontAwesomeIcon>
            <span className={faLayerGroup}>{props.cart.length}</span>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
