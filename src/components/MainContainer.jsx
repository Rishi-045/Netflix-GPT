import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
 
     const movies = useSelector(store=>store.movies?.nowPlayingMovies)

     if(!movies) return ;

     const newMovie = movies[0] ;

    const {overview , title} = newMovie



  return (
    <div>
        <VideoBackground /> 
        <VideoTitle overview={overview} title={title} />
    </div>
  )
}

export default MainContainer