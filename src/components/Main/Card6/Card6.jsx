import React from "react";
import "./Card6.css";
import {img11, img10, img12, img9} from '../../../assets'

const Card6 = () => {
  return (
    <div className="card6" id="card6">
      <div className="box"></div>
      <div className="circle"></div>
      <div className="head">Image Gallery</div>
      <b className="para">
        Browse through inspiring images of impactful CSR events and partnerships
      </b>
      <img className="image4-icon" alt="" src={img11} />
      <img className="image3-icon" alt="" src={img10} />
      <img className="image2-icon" alt="" src={img12} />
      <img className="image1-icon" alt="" src={img9} />
    </div>
  );
};

export default Card6;
