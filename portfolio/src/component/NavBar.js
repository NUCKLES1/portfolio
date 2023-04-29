import React from "react";
import { useState, useEffect } from "react";

export const NavBar = () => {

  return (
    <div className="Container">
      <h1 className="logo">Nuckles</h1>
      <div aria-control="basic-navbar-nav">
        <div className="basic-navbar">
          <div className="me-auto">
            <ul>
            <li><a href="home">Home</a></li>
            <li><a href="skills">Skills</a></li>
            <li><a href="projects">Projects</a></li>
            </ul>
          </div>

          <span className="navbar-text">
            <div className="social-icon">
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
