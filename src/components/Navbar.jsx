import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
      <h1 className="text-3xl">Motivational Quote App</h1>
      <p className="text-l">Get inspired with daily quotes!</p>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
