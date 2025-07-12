import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
    const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const langKey = useSelector(store=>store.config?.lang)
  return (
    <div className="bg-black ">
      <MovieList title={lang[langKey].movieType.nowPlayingMovies} movies={nowPlayingMovies} />
        <MovieList title={lang[langKey].movieType.upcomingMovies} movies={topRatedMovies} />
      <MovieList title={lang[langKey].movieType.popularMovies} movies={popularMovies} />
      <MovieList title={lang[langKey].movieType.topRatedMovies} movies={upComingMovies} />
    
   
    </div>
  );
};

export default SecondaryContainer;
