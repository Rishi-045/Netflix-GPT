import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../../utils/constant";
import { addMovieTrailer } from "../../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store=>store.movies?.movieTrailer)

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );
    const json = await data.json();
    const trailerData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
