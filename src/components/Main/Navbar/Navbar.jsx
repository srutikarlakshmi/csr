import React, { useState, useRef, useEffect } from "react";
import { Link} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <header>
      <div className="wrapper">
        <h1 className="logo">CSR PORTAL</h1>
        <div className="navbar">
          <p className="nav-head">
            <Link
              to="card2"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
            >
              Why Us?
            </Link>
          </p>
          <p className="nav-head">
            <Link
              to="card4"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
            >
              Discover
            </Link>
          </p>
          <p className="nav-head">
            <Link
              to="card6"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
            >
              Image Gallery
            </Link>
          </p>
          <RouterLink to = '/Login'>
          <button className="button">Login</button>
          </RouterLink>
          <RouterLink to = '/register'>
          <button className="button1">Sign Up</button>
          </RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
