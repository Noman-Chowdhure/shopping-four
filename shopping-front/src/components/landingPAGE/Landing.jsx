import React from 'react'
import Hero from './heroSection/Hero'
import Slide from './slideSection/Slide'
import Dummy from './slideSection/Dummy'
import LocomotiveScroll from "locomotive-scroll";
import About from './aboutSection/About';
import Coffee from './coffeeSection/Coffee';

const Landing = () => {
    const scroll = new LocomotiveScroll();
  return (
    <div>
        <Hero></Hero>
        <Slide></Slide>
        {/* <Dummy></Dummy> */}
        <About></About>
        <Coffee></Coffee>
    </div>
  )
}

export default Landing