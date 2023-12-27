import React from "react";
import "./Logo2.css";
import { Link } from "react-router-dom";

const Logo2 = () => {
  return (
    <div className="logo2">
      <div className="head">CSR PORTAL</div>
      <Link to="/company">
      <button className="button">Back</button>
      </Link>
    </div>
  );
};

export default Logo2;
