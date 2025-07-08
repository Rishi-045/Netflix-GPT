import { useEffect } from "react";
import { API_OPTION } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../../utils/moviesSlice'


const useNowPlayingMovies = ()=>{


  const dispatch = useDispatch();
  const totalMovies = useSelector(state=>state.movies)
  console.log(totalMovies.nowPlayingMovies?.length)

  const getNowPlayingMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTION)
    const json = await data.json()
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])

}

export default useNowPlayingMovies;