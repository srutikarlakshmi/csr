import React from "react";
import "./Hero1.css";
import { o1 } from "../../../assets";

const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="rect"></div>
      <img className="icon" alt="" src={o1} />
      <div className="para1">
        Streamline collaboration, event management, and partnership requests
        with our user friendly CSR portal. Experience efficient metrics
        tracking.secure payment processing, feedback systems, and profile
        management, all accessible on any device.
      </div>
      <b className="head1">
        <p className="head1-h">Empower Your Organization with Our CSR Portal</p>
      </b>
    </div>
  );
};

export default Hero1;
