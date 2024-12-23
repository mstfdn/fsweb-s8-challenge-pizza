import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "./AppBar.css";

function AppBar() {
  return (
    <>
      <div className="app-bar-logo-container">
        <Link to="/">
          <img className="app-bar-logo" src={logo} alt="Logo" />
        </Link>
      </div>
    </>
  );
}

export default AppBar;