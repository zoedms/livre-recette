import React from "react";
import Nav from "./Nav";
import logo from "../assets/4700_1_04.jpg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="cook"></img>
      </div>
      <div className="nav_header">
        <Nav link="Entrée" />
        <Nav link="Plat" />
        <Nav link="Dessert" />
      </div>
    </header>
  );
}

export default Header;
