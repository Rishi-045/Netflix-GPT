import React from 'react'
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-full aspect-video pt-[40%] sm:pt-[30%] md:pt-[20%] px-4 sm:px-8 md:px-12 absolute text-white z-10 bg-gradient-to-r from-black/80'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{title}</h1>
      <p className='py-4 text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[70%] md:max-w-[50%]'>
        {overview}
      </p>
      <div className='flex gap-2 sm:gap-3 flex-wrap'>
        <button className='flex items-center gap-2 bg-white text-black py-2 px-4 sm:px-6 text-sm sm:text-base hover:opacity-80 font-semibold rounded'>
          <FaPlay size={14} /> Play
        </button>
        <button className='flex items-center gap-2 bg-white text-black py-2 px-4 sm:px-6 text-sm sm:text-base hover:opacity-80 font-semibold rounded'>
          <FaInfoCircle size={16} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
