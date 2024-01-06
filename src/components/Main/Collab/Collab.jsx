import React, { useState } from "react";
import "./Collab.css";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Collab = () => {
  return (
    <div className="collab">
      <h2 className="head1">Collaborate for a better future!!!</h2>
      <div className="label">
        <p className="text-wrapper">
          Join our CSR platform and make a positive impact together.
        </p>
        <div className="buttons">
          <Link
            to="Navbar"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}
          >
            <RouterLink to="/register">
              <button className="join-button">Get Started</button>
            </RouterLink>
          </Link>
          <Link to="card1" spy={true} smooth={true} offset={20} duration={600}>
            <button className="learn-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collab;
