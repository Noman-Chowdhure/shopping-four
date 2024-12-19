import React from 'react'
import { nav } from '../utils/Utils'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' w-full h-fit grid grid-cols-3 py-12 justify-center justify-items-center items-center'>
    
     <div className="logo">
        <h1 className=' font-PT uppercase'>coffe house</h1>
     </div>
    <div className="navItems">
        <button className=' sm:hidden'>click</button>
        <div className="navbar flex">
            {
                nav.map(abc =>{
                    return(
                        <div key={abc.id}>
                            <nav className=''>
                                <ul className=' font-GB'>
                                    <Link className=' p-4 text-[1vw]' to={abc.path}>{abc.nam}</Link>
                                </ul>
                            </nav>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default NavBar