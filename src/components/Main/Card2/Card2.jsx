import React from "react";
import "./Card2.css";
import { img3 } from "../../../assets";

const Card2 = () => {
  return (
    <div className="card-2" id='card2'>
      <div className="buttons"></div>
      <img className="image-icon" alt="" src={img3} />
      <div className="para1">
        <b className="head1">Browse CSR Events</b>
        <p className="first">
          Easily find and participate in CSR events hosted by organization.
          Discover opportunities to make a positive impact.
        </p>
        <div className="slider"></div>
      </div>
      <div className="para2">
        <b className="head2">Create a Profile</b>
        <div className="second">
          Build your company's profile and showcase your commitment to CSR
          Attract potential corporate partners and colaborators.
        </div>
      </div>
      <div className="para3">
        <div className="third">
          <b className="head3">Collaborate Effortlessly</b>
          Connect with other businesses ind organizations to plan and execute CR
          Initiatives together. Amplify your social imparct.
        </div>
      </div>
    </div>
  );
};

export default Card2;
