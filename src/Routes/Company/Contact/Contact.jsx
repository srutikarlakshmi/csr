import React from "react";
import "./Contact.css";
import { msg, call, loc } from "../../../assets";

const Contact = () => {
  return (
    <div class="contact" id="contact">
      <div class="rect"></div>
      <button class="submit">
        <div class="submit1">Submit</div>
      </button>
      <input class="checkbox" required="{true}" type="checkbox" />
      <div class="agree">I agree to the terms & conditions</div>


      <div class="name">Name</div>
      <div class="big-box">
        <input class="input" type="text" />
      </div>
      
      
      <div class="message">Message</div>
      <div class="box">
        <input class="input1" type="text" />
      </div>

      
      <div class="email">Email</div>
      
      <div class="box1">
        <input class="input1" type="email" />
      </div>
      
      <div class="address">123 Main St, New BEL Road,Bangalore, India</div>
      <img class="loc-icon" alt="" src={loc} />
      <div class="number">+91 223-123-123</div>
      <img class="call-icon" alt="" src={call} />
      <div class="mail">info@gmail.com</div>
      <img class="msg-icon" alt="" src={msg} />
      <b class="head2">
        Stay connected with us for upcoming CSR events and their locations.
      </b>
      <b class="head">Get in Touch</b>
      <div class="sm-head">Discover</div>
    </div>
  );
};

export default Contact;
