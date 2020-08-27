import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Banner } from "../components/Banner";

export const Introduction = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <h1>Learn how to memorise a full deck of cards</h1>
      <div>
        <div>
          <h1>Beginner</h1>
          <p>{}</p>
        </div>
        <div>
          <h1>Intermediate</h1>
          <p>{}</p>
        </div>
        <div>
          <h1>Advanced</h1>
          <p>{}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Introduction;
