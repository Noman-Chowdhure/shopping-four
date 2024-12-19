import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
import { motion } from "motion/react"
const Slide = () => {
    useGSAP(()=>{
       gsap.to('.slider' , {
        x:-200,
        scrollTrigger:{
            trigger:'.slider',
            scroller:'body',
            start:'top 50%',
            scrub:true
        }
       })
    },[])
  return (
    <div>
       <div className="slider flex gap-10 text-wrap font-PT ">
         <p className=' text-[6vw] font-thin uppercase'>coffee /</p>
         <p className=' text-[6vw] font-thin text-gray-400 uppercase'>house</p>
         <p className=' text-[6vw] font-thin uppercase'>coffee /</p>
         <p className=' text-[6vw] font-thin text-gray-400 uppercase'>house</p>
         <p className=' text-[6vw] font-thin uppercase'>coffee /</p>
         <p className=' text-[6vw] font-thin text-gray-400 uppercase'>house</p>
         <p className=' text-[6vw] font-thin uppercase'>coffee /</p>
         <p className=' text-[6vw] font-thin text-gray-400 uppercase'>house</p>
 
       </div>
    </div>
  )
}

export default Slide