import React, { useEffect } from 'react'

const Pagetransction = () => {
    useEffect(()=>{
      setTimeout(() => {
         console.log('hello world..')
      }, 2000);   
    },[])
  return (
    <div>
       <h1>noma</h1>
    </div>
  )
}

export default Pagetransction