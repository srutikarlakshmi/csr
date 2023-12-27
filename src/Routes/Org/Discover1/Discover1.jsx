import React from 'react'
import './Discover1.css'
import { o2 } from "../../../assets";

const Discover1 = () => {
  return (
    <div className="discover1">
      <div className="line2">Reduction in Administrative Effort and Time.</div>
      <b className="b">50%</b>

      <div className="line3">
        Increase in Event Participation and Engagement.
      </div>
      <b className="b1">50%</b>

      <div className="para">
        Our user-friendly CSR portal has enabled organizations to collaborate
        more efficiently, manage events seamlessly, and track metrics
        effectively.
      </div>
      <b className="head2">
        <p className="heading">Discover the Impact of Our CSR Portal on Organizations' Efforts</p>
      </b>
      <img className="icon" alt="" src={o2} />
    </div>
  )
}

export default Discover1