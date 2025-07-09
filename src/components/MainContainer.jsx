import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
 
     const movies = useSelector(store=>store.movies?.nowPlayingMovies)

     if(!movies) return ;

     const newMovie = movies[5] ;

    const {overview , title, id} = newMovie



  return (
    <div>
      
          <VideoBackground movieId = {id} /> 
      
        <VideoTitle overview={overview} title={title} />
    </div>
  )
}

export default MainContainer