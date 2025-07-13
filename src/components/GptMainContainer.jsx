import React from 'react'
import GptMovieSuggestionBox from './GptMovieSuggestionBox'
import GptSearchBar from './GptSearchBar'
import netflixBg from "../assets/netflixBg.png"

const GptSearch = () => {
  return (
    <div className="text-white relative min-h-screen">
      <img src={netflixBg} alt="" className="w-full h-full object-cover fixed inset-0 -z-10"/>
        
        <GptSearchBar />
        <GptMovieSuggestionBox />
    </div>
  )
}

export default GptSearch