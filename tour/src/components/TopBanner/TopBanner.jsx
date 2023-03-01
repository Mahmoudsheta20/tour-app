import React from "react";
import { paris } from "../../assets/image";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="top__banner">
      <h2>Our biggest offer</h2>
      <div className="row__banner">
        <div className="card__banner">
          <img src={paris} alt="" />
          <div className="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card__banner">
          <img src={paris} alt="" />
          <div className="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card__banner">
          <img src={paris} alt="" />
          <div className="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
