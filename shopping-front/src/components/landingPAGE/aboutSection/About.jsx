import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    useEffect(() => {
        let child = document.getElementsByClassName('childs');
        Array.from(child).forEach((element) => {
          gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
        });
      }, []);
      


  return (
    <div className=" w-full h-fit">
      <div className="title">
        <h1>how does it work's</h1>
      </div>
      <div className="body w-full">
        <div className="parent">
          <div className="childs sticky top-28 w-full h-screen grid grid-cols-3 gap-x-20 justify-center justify-items-center">
            <div className="boxs">
              <h1 className=" text-[6vw] font-PT">1</h1>
            </div>
            <div className="boxs">
              <h1 className=" font-GB text-[4vw] uppercase">fast delivery</h1>
            </div>
            <div className="boxs">
              <div className="fuck">
                <h1 className=" font-PT uppercase text-[4vw] font-extralight">we ensure fast delivery to customer..</h1>
              </div>
            </div>
          </div>

          <div className="childs sticky top-28 w-full h-screen grid grid-cols-3 bg-white gap-x-20 justify-center justify-items-center">
            <div className="boxs">
              <h1 className=" text-[6vw] font-PT">2</h1>
            </div>
            <div className="boxs">
              <h1 className=" font-GB text-[4vw] uppercase">fast delivery</h1>
            </div>
            <div className="boxs">
              <div className="fuck">
                <h1 className=" font-PT uppercase text-[4vw] font-extralight">we ensure fast delivery to customer..</h1>
              </div>
            </div>
          </div>

          <div className="childs sticky top-28 w-full h-screen bg-white grid grid-cols-3 gap-x-20 justify-center justify-items-center">
            <div className="boxs">
              <h1 className=" text-[6vw] font-PT">3</h1>
            </div>
            <div className="boxs">
              <h1 className=" font-GB text-[4vw] uppercase">fast delivery</h1>
            </div>
            <div className="boxs">
              <div className="fuck">
                <h1 className=" font-PT uppercase text-[4vw] font-extralight">we ensure fast delivery to customer..</h1>
              </div>
            </div>
          </div>

          <div className="childs sticky top-28 w-full bg-white h-screen grid grid-cols-3 gap-x-20 justify-center justify-items-center">
            <div className="boxs">
              <h1 className=" text-[6vw] font-PT">4</h1>
            </div>
            <div className="boxs">
              <h1 className=" font-GB text-[4vw] uppercase">fast delivery</h1>
            </div>
            <div className="boxs">
              <div className="fuck">
                <h1 className=" font-PT uppercase text-[4vw] font-extralight">we ensure fast delivery to customer..</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
