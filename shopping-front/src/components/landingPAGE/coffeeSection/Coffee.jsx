import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Coffee = () => {
    useGSAP(()=>{
        gsap.from('.lines',{
            y:-300,
            opacity:0,
            duration:0.6,
            stagger:0.4,
            delay:0.5,
            scrollTrigger:{
                trigger:'.lines',
                scroller:'body',
                start:'top 10%',
                markers:true
            }
        })
    },[])
  return (
    <div className=' w-full h-fit bg-green-900 px-10'>
        <div className="title">
            <h1>our coffee</h1>
        </div>
        <div className="body">
          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[8vw] uppercase font-bold font-PT mt-3">
             <h1>use</h1>
             <img className=' w-20 h-42 rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
             <h1>premium</h1>
          </div>
          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>arabica</h1>
             <h1>beans</h1>
             <img className=' w-40 h-20 object-cover rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
          </div>

          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>and</h1>
             <img className=' w-20 h-42 rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
             <h1>freshly</h1>
          </div>

          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>ground</h1>
             <img className=' w-20 h-24 rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
             <h1>spices</h1>
          </div>

          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>to</h1>
             <img className=' w-20 h-20 rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
             <h1>achieve</h1>
             <h1>arrow</h1>
          </div>
          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>anundeniable</h1>
             <img className=' w-20 h-20 rounded-full' src="https://i.pinimg.com/736x/42/9e/27/429e271444a71a2f67743e29fea79e42.jpg" alt="" />
             <h1>rich,</h1>
          </div>
          <div className="lines h-[19vh] text-gray-100 overflow-hidden flex gap-x-10 justify-center text-[7vw] uppercase font-bold font-PT mt-3">
             <h1>flavours</h1>
    
             <h1>coffee</h1>
          </div>
        </div>
    </div>
  )
}

export default Coffee