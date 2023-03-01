import React from "react";
import { card1, makhha, paris, tawar } from "../../assets/image";
import "./Seaction.css";

import Slider from "react-slick";

const Seaction = ({ header }) => {
  return (
    <main>
      <h2 className="header">{header}</h2>
      <div className="conatiner">
        <div className="row">
          <div className="card">
            <img src={makhha} alt="" />
            <div className="text">
              <h2>makkha</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <img src={tawar} alt="" />
            <div className="text">
              <h2>makkha</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <img src={paris} alt="" />
            <div className="text">
              <h2>Paris</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <img src={card1} alt="" />
            <div className="text">
              <h2>dubai</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Seaction;
