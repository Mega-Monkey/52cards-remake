import React from "react";
import "./Banner.css";
import { NavLink } from "react-router-dom";

export const Banner = () => {
  return (
    <NavLink
    to="/"
    exact
    >
    <div className="banner-container">
      <h1 className="banner">
        <div className="icon-div">♥</div>52 cards
        <div className="icon-div">♠</div>
      </h1>
    </div>
    </NavLink>
    
  );
};
