import React from "react";
import { Link } from "react-router-dom";

import { useRef } from "react";

import "./navbar.scss";

function Navbar({ select }) {
  const link_1 = useRef();
  const link_2 = useRef();
  const link_3 = useRef();
  const link_4 = useRef();

  function selectionHandler(id, element) {
    if (id === select) {
      element.current.classList = "selected";
    } else {
      element.current.classList = "";
    }
  }

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
                <Link to="/" ref={link_1}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/projects" ref={link_2}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" ref={link_3}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" ref={link_4}>
                  Contact
                </Link>
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
