import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="Container">
      <div className="nav">
        <div className="navi">
          <h1 className="logo">Nuckles</h1>
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
                <li>
                  <Link to="">projects</Link>
                </li>
              </ul>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </div>
      </div>
      <img className="menu" src="menu.png" alt="" />
    </div>
  );
};

export default NavBar;
