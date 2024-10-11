import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <div className="wrapper-1 flex">
          <div className="logo flex">
            <div className="profileLogo">
              <img src="img/profileLogo.jpg" alt="" />
            </div>
            <p className="logoText">Aanshik Sharma</p>
          </div>
          <nav className="navbar">
            <ul className="navlist flex">
              <li>
                <Link to="/" className="selected">
                  Portfolio
                </Link>
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
              <li>
                <a
                  href="./aanshik_sharma__resume.pdf"
                  download="aanshik_sharma__resume.pdf"
                  className="text-cta"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
