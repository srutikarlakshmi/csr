import React from 'react'
import './Logo3.css'
import { Link as RouterLink } from 'react-router-dom';

const Logo3 = () => {
  return (
    <div className="logo3">
      <div className="head">CSR PORTAL</div>
      <RouterLink to ='/org'>
      <button className="button">Back</button>
      </RouterLink>
    </div>
  )
}

export default Logo3