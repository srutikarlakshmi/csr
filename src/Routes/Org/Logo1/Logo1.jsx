import React from "react";
import "./Logo1.css";
import { prof } from "../../../assets";
import { Link} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Logo1 = () => {
  return (
    <div class="logo1">
      <div class="contact">
        <Link to="footer" spy={true} smooth={true} offset={50} duration={600}>
          Contact Us
        </Link>
      </div>
      <div class="about">
        <Link to="hero1" spy={true} smooth={true} offset={50} duration={600}>
          About Us
        </Link>
      </div>
      <div class="events">
        <Link to="event2" spy={true} smooth={true} offset={50} duration={600}>
          Events
        </Link>
      </div>
      <RouterLink to= '/'>
      <div class="button">
      
        <div class="sign-up">Log Out</div>
      
      </div>
      </RouterLink>
      <RouterLink to ='/orgprof'>
      <img class="prof" alt="" src={prof} />
      </RouterLink>
      <div class="head">CSR PORTAL</div>
    </div>
  );
};

export default Logo1;
