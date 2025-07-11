import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { upComingMovies } from "../../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(upComingMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
