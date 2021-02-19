import React from "react";
import logo from '../assets/logo.png'


const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="250" />
    <h1 className="mb-4">Journal App</h1>
    <p className="lead">
      This is a React Auth0 Project
      
    </p>
  </div>
);

export default Hero;
