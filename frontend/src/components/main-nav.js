import {NavLink, Navbar} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/journal-entries"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Journal Entires
    </NavLink>
    <NavLink
      to="/create-entry"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Create Journal Entry
    </NavLink>
  </div>
);

export default MainNav;
