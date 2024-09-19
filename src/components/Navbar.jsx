import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li id="li1">
          <Link to="/">Home</Link>
        </li>
        <li id="li2">
          <Link to="/project">Project</Link>
        </li>
        <li id="li3">
          <Link to="/github">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
