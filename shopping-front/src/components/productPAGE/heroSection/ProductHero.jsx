import React from 'react'

const ProductHero = () => {
  return (
    <div className=' w-full h-full grid grid-cols-2 justify-center justify-items-center items-center'>
        <div className="text_context">
           
            <h1 className=' uppercase font-GB text-[5vw]'>stay your</h1>
            <h1 className=' uppercase font-GB text-[5vw]'>day</h1>
            <h1 className=' uppercase font-GB text-[5vw]'>with our</h1>
            <h1 className=' uppercase font-GB text-[5vw]'>coffee</h1>
        </div>
        <div className="img_context w-full grid grid-cols-5">
            <div className="product_box">
            <img className='h-[70vh] object-cover'  src="https://i.pinimg.com/736x/63/6b/cd/636bcd44ef1c73f0bc1f5b6d3c81d72e.jpg" alt="" />
            </div>
            <div className="product_box">
                <img className='h-[70vh] object-cover'  src="https://i.pinimg.com/736x/80/76/bf/8076bf755879171af47e24957e76f1b0.jpg" alt="" />
            </div>
            <div className="product_box">
                <img className='h-[70vh] object-cover'  src="https://i.pinimg.com/736x/f3/fc/e8/f3fce88871169bac6996ae54eb9f3f27.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductHero