import React from "react";
import "./Latest.css";
import { c2, c3, c4 } from "../../../assets";

const Latest = () => {
  return (
    <div className="latest" id="latest">
      <div className="sm-head1">
        Stay informed about upcoming CSR events near you.
      </div>
      <b className="head">Discover Upcoming CSR Events</b>
      <div className="sm-head">Latest</div>

      <b className="head1">
        <p className="main-head">
          How to Reduce Plastic Waste in Your Daily Life
        </p>
      </b>
      <div className="sm2">7 min read</div>
      <div className="category1">
        <div className="categories">Categories</div>
      </div>
      <div className="rect"></div>
      <img className="c2-icon" alt="" src={c2} />

      <div className="para2">
        <p className="main-head">
          Discover the impact of education in rural communities and how you can
          help
        </p>
        <p className="main-head">&nbsp;</p>
        <p className="main-head">Read more</p>
      </div>
      <b className="head2">
        <p className="main-head">
          The Importance of Education in Pural Communities
        </p>
      </b>
      <div className="sm1">6 min read</div>
      <div className="category2">
        <div className="categories">Categories</div>
      </div>
      <div className="rect1"></div>
      <img className="c3-icon1" alt="" src={c3} />
      <div className="para1">
        <p className="main-head">
          Learn simple ways to reduce plastic waste and protect the environment.
        </p>
        <p className="main-head">&nbsp;</p>
        <p className="main-head">Read more</p>
      </div>

      <div className="para3">
        <p className="main-head">
          Explore initiatives that aim to improve healthcare access in
          underserved communities.
        </p>
        <p className="main-head">&nbsp;</p>
        <p className="main-head">Read more</p>
      </div>
      <b className="head3">
        <p className="main-head">
          Improving Access to Healthcare in Underserved Communities
        </p>
      </b>
      <div className="sm">8 min read</div>
      <div className="category3">
        <div className="category">Categories</div>
      </div>
      <div className="rect3"></div>
      <img className="c3-icon" alt="" src={c4} />
    </div>
  );
};

export default Latest;
