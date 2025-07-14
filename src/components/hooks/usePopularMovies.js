import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { popularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector(store=>store.movies?.popularMovies)


  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(popularMovies(json.results));
  };

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);
};

export default usePopularMovies;
