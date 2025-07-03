import React from 'react'
import netflixLogo from "../assets/netflixLogo.png"
const Header = () => {
  return (
    <div className='absolute left-24 top-5 bg-gradient-to-b from-black z-10'>
        
        <img 
        className='w-48  '
        src={netflixLogo} alt="" />

    </div>
  )
}

export default Header