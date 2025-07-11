import React from 'react'
import GptMovieSuggestionBox from './GptMovieSuggestionBox'
import GptSearchBar from './GptSearchBar'
import netflixBg from "../assets/netflixBg.png"

const GptSearch = () => {
  return (
    <div className='text-white'>
      <img src={netflixBg} alt="" />
        
        <GptSearchBar />
        <GptMovieSuggestionBox />
    </div>
  )
}

export default GptSearch