import React from "react";
import "./Card3.css";
import {img4} from '../../../assets'

const Card3 = () => {
  return (
    <div className="card-3">
      <img className="image-icon" alt="" src={img4} />
      <b class="head1">Collaborate</b>
      <b className="head2">
        <p className="head2-head ">
          Unlock the Power of Collective Imapact.
        </p>
      </b>
      <div className="para1">
        Partnering with other businesses and organizations for CSR activities
        brings numerous advantages. By collaborating. you can pool resources,
        share expertise, and amplify your social impact.
      </div>
      <img className="res-icon" alt="" src="src\assets\5.png" />
      <b className="sub-head1">Resource Sharing</b>
      <div className="para2">
        Access a wide range of resources and expertise from like-minded
        partners.
      </div>
      <img className="res-icon2" alt="" src="src\assets\5.png" />
      <b className="sub-head2">Increased Visibility</b>
      <div className="para3">
        Showcase your CSR initiatives to a larger audience, attracting potential
        partners and supporters.
      </div>
      <button className="button">
        Learn More
      </button>
    </div>
  );
};

export default Card3;
