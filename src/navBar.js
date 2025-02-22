// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Optional: for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/input">Input</Link>
        </li>
        <li>
          <Link to="/conditional">Conditional Component</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
