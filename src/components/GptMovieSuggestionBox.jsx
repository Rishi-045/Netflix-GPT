import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constant';

const GptMovieSuggestionBox = () => {
  const { movieSearch, movieResults } = useSelector((store) => store.gpt);

  if (!movieSearch || !movieResults) return;

  return (
<div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
  <div className="bg-black/80 text-white absolute rounded-lg top-[30%] h-[85vh] overflow-y-auto scrollbar-hide mx-2 px-2 py-6 space-y-8">
    {movieSearch.map((movieName, index) => (
      <div key={movieName}>
        <h2 className="text-xl font-semibold mb-3 px-2">{movieName}</h2>

        {/* ✅ Changed to flex-wrap layout */}
        <div className="flex flex-wrap gap-4 px-2 justify-start">
          {movieResults[index].slice(0, 9)?.map((movie) => (
            <div
              key={movie.id}
              className="w-[130px] cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={IMG_CDN_URL + movie.poster_path}
                alt={movie.title}
                className="w-full h-[195px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Hide scrollbar if ever needed again */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    ))}
  </div>
</div>


  );
};

export default GptMovieSuggestionBox;
