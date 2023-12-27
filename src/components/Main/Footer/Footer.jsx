import React from "react";
import "./Footer.css";
import { img14, img15, img16, img17 } from "../../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div class="csr-portal">CSR PORTAL</div>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
      <div className="icons">
        <a href="#"><img class="fb-icon" alt="" src={img14} /></a>
        <a href="#"><img class="yt-icon" alt="" src={img17} /></a>
        <a href="#"><img class="x-icon" alt="" src={img16} /></a>
        <a href="#"><img class="insta-icon" alt="" src={img15} /></a>
      </div>
    </div>
  );
};

export default Footer;
