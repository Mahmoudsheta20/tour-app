import React from "react";
import { logo } from "../../assets/image";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="rigth">
        <img src={logo} alt="" />
        <h2>
          New<span>Sky</span>
        </h2>
      </div>

      <div className="center">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>

      <div className="left">
        <button>Book Now</button>
        {/* <p>Lng</p> */}
      </div>
    </nav>
  );
};
export default Navbar;
