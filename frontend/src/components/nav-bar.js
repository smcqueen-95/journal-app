// src/components/nav-bar.js

import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import "./nav-bar.css";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav class="navbar navbar-expand-md">
        <div className="container">
          <div className="navbar-brand">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </div>
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
