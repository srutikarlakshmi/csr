import React from 'react'
import { Footer} from '../components/Main'
import {Navbar, Hero, Latest, Task, Contact} from './CompIndex'
import { account } from '../config/appwrite'
import { useEffect } from 'react'

const Company = () => {


  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
      <Task />
      <Contact />
      <Footer />
    </>
  )
}

export default Company