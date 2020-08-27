import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <Fragment>
      <Banner className="home-banner" />

      <div className="all-link-holder-home">
        <Link className="link" to="/introduction">
          <div className="single-link-holder-home">
            <div className="title-holder-home">
              <span className="title">Introduction</span>
            </div>
            <div>
              <div className="card-holder-home">
                <img src="/assets/images/cards/club_k.png" alt="" />
              </div>
            </div>
          </div>
        </Link>
        <Link className="link" to="/beginner">
          <div className="single-link-holder-home">
            <div className="title-holder-home">
              <span className="title">Beginner</span>
            </div>
            <div>
              <div className="card-holder-home">
                <img src="/assets/images/cards/diamond_a.png" alt="" />
              </div>
            </div>
          </div>
        </Link>{" "}
        <Link className="link" to="/intermediate">
          <div className="single-link-holder-home">
            <div className="title-holder-home">
              <span className="title">Intermediate</span>
            </div>
            <div>
              <div className="card-holder-home">
                <img src="/assets/images/cards/spade_2.png" alt="" />
              </div>
            </div>
          </div>
        </Link>{" "}
        <Link className="link" to="/advanced">
          <div className="single-link-holder-home">
            <div className="title-holder-home">
              <span className="title">Advanced</span>
            </div>
            <div>
              <div className="card-holder-home">
                <img src="/assets/images/cards/heart_3.png" alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
