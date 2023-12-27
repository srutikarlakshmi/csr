import React from 'react'
import './Pics.css'
import { cp1, cp2, cp3, cp4, cp5 } from '../../../assets'

const Pics = () => {
  return (
    
<div className="pics">
<img className="icon" alt="" src= {cp5} />
<img className="icon1" alt="" src= {cp4} />
<img className="icon2" alt="" src= {cp3} />
<img className="icon3" alt="" src= {cp2} />
<img className="icon4" alt="" src= {cp1} />
</div>
  )
}

export default Pics