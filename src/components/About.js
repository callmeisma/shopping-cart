import React from "react";

function About() {
  return (
    <div className="about d-flex justify-content-center align-items-center flex-grow-1">
      <div className="d-flex flex-column align-items-center">
        <h1 className="m-auto">A Better Bike Shop Experience</h1>
        <p className="w-50 m-auto py-4">
          We're devoted to delivering the bike shop experience the way we've
          always wanted it to be. A curated collection of cycling's standout
          brands, hands-on expertise and service.
        </p>
      </div>
      <img
        className="about-img"
        src="https://images.unsplash.com/photo-1622456149571-44563067b5d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        alt="cyclists"
      ></img>
    </div>
  );
}

export default About;
