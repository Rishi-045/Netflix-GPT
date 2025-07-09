import React from 'react'
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-12 absolute text-white z-5 bg-gradient-to-r from-black/80' >
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-2/4'>{overview}</p>
        <div className='flex gap-3'>
            <button className='flex gap-1 bg-white text-black p-2 px-8 text-lg hover:opacity-70 cursor-pointer font-bold  rounded'>
               <FaPlay size={13} className='mt-2'/> Play
            </button>
            <button className='flex gap-1 bg-white text-black p-2 px-8 text-lg hover:opacity-70 cursor-pointer  font-bold rounded'>
              <FaInfoCircle size={18}  className='mt-[0.4rem]'/>  More Info
            </button>
            

        </div>
    </div>
  )
}

export default VideoTitle