import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
    const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies)
  return (
    <div className="bg-black ">
      <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={topRatedMovies} />
      <MovieList title={"Popular Movies"} movies={popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={upComingMovies} />
    
   
    </div>
  );
};

export default SecondaryContainer;
