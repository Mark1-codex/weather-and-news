import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Header = ({}) => {
  return (
    <header className="Header">
      <h1 className="header-title">Weather dashboard</h1>
      <div className="header-container">
        <p className="header-container-text-left">Create your personal list of <br/> favorite cities and always be <br/> aware of weather.</p>
        <hr className="header-container-text-line"></hr>
        <p className="header-container-text-right">October 2023 <br/> Friday 13<p className="header-container-text-right-suffix">th</p></p>
      </div>
      <form className="header">
        <input type="text" placeholder="Search location" className="header-search"/>
        <button type="submit"><FaMagnifyingGlass /></button>
      </form>
    </header>
  );
};

export default Header;
