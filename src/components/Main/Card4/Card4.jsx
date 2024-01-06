import React, { useState } from "react";
import "./Card4.css";
import SignUp from "../../SignIn/SignUp/SignUp";
import { Link as RouterLink } from 'react-router-dom';

const Card4 = () => {


  return (
    <div className="card-4" id="card4">
      <div className="text-input"></div>
      <b className="head1">Discover</b>
      <b className="head2">
        <p className="find-csr-events">
          Find CSR Events and Connect with Partners
        </p>
      </b>
      <div className="para4">
        Showcase your CSR events on the platform and attract corporate partners.
      </div>
      <b className="step4">Step Four</b>
      <div className="para3">
        Collaborate with partners to execute meaningful CSR activities and make
        a social impact.
      </div>
      <b className="step3">Step Three</b>
      <div className="para2">
        Connect with like-minded companies and organizations to plan CSR
        initiatives.
      </div>
      <b className="step2">Step Two</b>
      <div className="para1">
        Browse through a wide range of CSR events hosted by organizations.
      </div>
      <b className="step1">Step One</b>

      
        <RouterLink to="/register">
      <button className="button" id="button">Get Started
      </button>
      </RouterLink>


      <b className="b">4</b>
      <b className="b1">3</b>
      <b className="b2">2</b>
      <b className="b3">1</b>
    </div>
  );
};

export default Card4;
