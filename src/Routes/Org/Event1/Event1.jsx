import React from "react";
import "./Event1.css";
import { o3, o4, o5, o6 } from "../../../assets";

const Event1 = () => {
  return (
    <div class="event1">
      <button class="see">
        <div class="seeall">See all</div>
      </button>
      <div class="rect4"></div>
      <div class="para4">
        <p class="text">Explore the latest trends and technologies shaping the future of workplace collaboration.</p>
      </div>
      <b class="h4">
        <p class="text">The Future of Collaboration in the Workplace.</p>
      </b>
      <img class="icon" alt="" src={o6} />
      <button class="apply4">
        <div class="apply">Apply</div>
      </button>
      <div class="rect3"></div>
      <div class="para3">
        <p class="text">Learn strategies to maximize team collaboration and achieve better outcomes.</p>
      </div>
      <b class="h3">
        <p class="text">Maximizing Team Collaboration for Better Results</p>
      </b>
      <img class="icon1" alt="" src={o5} />
      <button class="apply3">
        <div class="apply1">Apply</div>
      </button>
      <div class="rect2"></div>
      <div class="para2">
        Discover how effective collaboration can drive success in your
        organization.
      </div>
      <b class="h2">
        <p class="text">The Benefits of Effective Collaboration.</p>
        <p class="text"></p>
      </b>
      <img class="icon2" alt="" src={o4} />
      <button class="apply2">
        <div class="apply5">Apply</div>
      </button>
      <button class="apply11">
        <div class="apply6">Apply</div>
      </button>
      <div class="rect1"></div>
      <div class="para1">
        <p class="text">Learn how our collaboration tools can streamline your workflow.</p>
      </div>
      <b class="h1">
        <p class="text">Boost Your Productivity with Collaboration Tools</p>
      </b>
      <img class="icon3" alt="" src={o3} />
      <b class="sub-head">Discover the power of our intuitive dashboard.</b>
      <b class="head">Collaboration Made Easy</b>
    </div>
  );
};

export default Event1;
