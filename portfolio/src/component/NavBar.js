import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="Container">
      <div className="nav">
        <div className="navi">
          <h1 className="logo">
           Nuckles
          </h1>
        </div>
        <div className="basic-navbar">
          <div className="me-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="resume" onClick={() => console.log("connect")}>
              <span>Resume</span>
            </button>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Reach Out</span>
            </button>
          </div>
        </div>
      </div>
      <img className="menu" src="menu.png" alt="" />
    </div>
  );
};

export default NavBar;
