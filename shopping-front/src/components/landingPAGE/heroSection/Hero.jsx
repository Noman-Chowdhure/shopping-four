import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {



  return (
    <div className=' w-full h-[50vh] grid  items-center'>
       
        <div className="boxes grid grid-cols-2 justify-center justify-items-center items-center gap-10 md:gap-5">
           <div className="img_section">
            <img src="https://i.pinimg.com/originals/df/20/99/df2099e7d739fc6967703b70045dd92f.gif" alt="" />
           </div>
           <div className="text_context  bg-white   w-full ">
              <div className="box w-full h-[7vw] overflow-hidden text-nowrap text-center">
                 <h1 className=' font-GB text-[3vw] uppercase'>alowishus</h1>
              </div>
              <div className="box w-full h-[7vw] overflow-hidden text-nowrap text-center">
                 <h1 className=' font-GB font-thin text-[5vw] uppercase'>delicious</h1>
              </div>
              <div className="box w-full h-[7vw] overflow-hidden text-nowrap text-center">
                 <h1 className=' font-GB text-[3vw] uppercase'>coffee!</h1>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Hero