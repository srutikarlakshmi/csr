import React from "react";
import { Link} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="head">CSR PORTAL</div>
      <RouterLink to="/com-prof">
        <button className="button1">Profile</button>
      </RouterLink>
      <RouterLink to="/">
        <button className="button">Log Out</button>
      </RouterLink>

      <div className="events">
        <Link to="task" spy={true} smooth={true} offset={50} duration={600}>
          Events
        </Link>
      </div>
      <div className="about">
        <Link to="latest" spy={true} smooth={true} offset={50} duration={600}>
          About Us
        </Link>
      </div>
      <div className="contact">
        <Link to="contact" spy={true} smooth={true} offset={50} duration={600}>
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
