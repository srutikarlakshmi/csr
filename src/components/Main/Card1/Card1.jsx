import React from 'react'
import './Card1.css'
import {img2} from '../../../assets'

const Card1 = () => {
  return (
    <div className="card1">
      <div className="card1-card">
        <div className="overlap-group">
          <div className="buttons"></div>
          <img className="image" src={img2} alt="" />
            <p className="head">
            Streamline CSR planning and <br />execution with our <br />  collaborative platform.
            </p>
            <p className="body">
            Our platform enables businesses and organizations to easily collaborate, plan, and execute meaningful CSR initiatives, fostering social impact and corporate engagement.
            </p>
          </div>
        </div>
      </div>

  )
}

export default Card1