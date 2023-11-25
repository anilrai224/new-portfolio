import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <ul>
        <li style={{cursor:'pointer'}}>Home</li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Navbar;