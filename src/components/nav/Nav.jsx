import React from "react";
import "./Nav.css"
import navLogo from "./nav-logo.svg"
import { VscAccount } from "react-icons/vsc";
const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Logo-section">
        <img src={navLogo}></img>
      </div>
      <div className="Central-section">
        <a>Who we are</a> <br />
        <a>Contacts</a> <br />
        <a>Menu</a> <br />
      </div>
      <div className="Account-section">
        <button className="Signup-button">Sign Up</button>
        <VscAccount className="Account-icon"/>
      </div>
    </nav>
  );
};

export default Nav;
