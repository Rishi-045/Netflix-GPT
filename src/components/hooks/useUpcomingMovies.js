import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { upComingMovies } from "../../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovie = useSelector(store=>store.movies.upComingMovies)

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(upComingMovies(json.results));
  };

  useEffect(() => {
   !upComingMovie && getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
