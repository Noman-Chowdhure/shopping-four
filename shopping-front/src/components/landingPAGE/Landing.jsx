import React from 'react'
import Hero from './heroSection/Hero'
import Slide from './slideSection/Slide'
import Dummy from './slideSection/Dummy'
import LocomotiveScroll from "locomotive-scroll";

const Landing = () => {
    const scroll = new LocomotiveScroll();
  return (
    <div>
        <Hero></Hero>
        <Slide></Slide>
        <Dummy></Dummy>
    </div>
  )
}

export default Landing