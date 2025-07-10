import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="bg-black ">
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
