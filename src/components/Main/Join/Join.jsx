import React, { useState } from "react";
import "./Join.css";
import SignUp from "../../SignIn/SignUp/SignUp";
import { img13 } from "../../../assets";
import { Link as RouterLink } from "react-router-dom";

const Join = () => {
  return (
    <div className="join">
      <img className="image-icon" alt="" src={img13} />
      <b className="head12">Join us in making a difference</b>
      <div className="para">
        Discover CSR initiatives and collaborate with like-minded business
      </div>

      <RouterLink to="/register">
        <button className="button">Sign Up</button>
      </RouterLink>
    </div>
  );
};

export default Join;
