import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <div className="wrapper-1 flex">
          <div className="logo">Aanshik Sharma</div>
          <nav className="navbar">
            <ul className="navlist flex">
              <li>
                <Link to="/" className="selected" >Portfolio</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
