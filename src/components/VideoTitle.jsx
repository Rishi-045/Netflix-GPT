import React from 'react'
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-2/4'>{overview}</p>
        <div className='flex gap-3'>
            <button className='bg-gray-500 text-white p-2 px-12 text-xl opacity-50 rounded'>
                <span>Play</span>
            </button>
            <button className='bg-gray-500 text-white p-2 px-12 text-xl opacity-50 rounded'>
              More Info
            </button>
            

        </div>
    </div>
  )
}

export default VideoTitle