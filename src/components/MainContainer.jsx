import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const MainContainer = () => {
     const langKey = useSelector(store=>store.config?.lang)
     const movies = useSelector(store=>store.movies?.nowPlayingMovies)

     if(!movies) return ;

     const newMovie = movies[3] ;

    const {overview , title, id} = newMovie



  return (
    <div>
      
          <VideoBackground movieId = {id} /> 
      
        <VideoTitle overview={ lang[langKey]?.trailer?.description || overview} title={lang[langKey]?.trailer?.title ||title} />
    </div>
  )
}

export default MainContainer