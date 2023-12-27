import React from 'react'
import './Hero.css'
import {c1} from '../../../assets'

const Hero = () => {
  return (
    <div className="box" id='hero'>
        <div className="learn-more">
            <div className="learn-more1">See More</div>
        </div>
        <b className="para">Join us in making a positive impact on society.</b>
        <b className="line1">
            <p className="heading">Empowering Change Through Corporate Social Responsibility</p>

        </b>
        <img className="imgc1" alt="" src={c1} />

    </div>
  )
}

export default Hero