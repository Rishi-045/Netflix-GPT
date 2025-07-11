import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon lib

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  if (!movies) return null;

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300; // adjust as needed
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-10 top-[100vh] px-9.5 p-2">
      <h1 className="text-white mb-2 text-lg font-semibold">{title}</h1>

      {/* Scroll buttons */}
      <button
        className="absolute left-1 top-[50%] z-20 text-white bg-black/60 hover:bg-black p-2 rounded-full hidden md:block"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={14} />
      </button>
      <button
        className="absolute right-1 top-[50%] z-20 text-white bg-black/60 hover:bg-black p-2 rounded-full hidden md:block"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={14} />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className=" flex overflow-x-auto scroll-smooth scrollbar-hide gap-2.5 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",       // Firefox
          msOverflowStyle: "none",      // IE/Edge
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="snap-start">
            <MovieCard title={movie?.title} posterUrl={movie?.poster_path} />
          </div>
        ))}
      </div>

      {/* Hide scrollbar in WebKit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MovieList;
