import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { topRatedMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector(store=>store.movies?.topRatedMovies)

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(topRatedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovie && getPopularMovies();
  }, []);
};

export default usePopularMovies;
