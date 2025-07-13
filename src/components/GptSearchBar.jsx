import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
// import client from "../utils/openAi";
import ai from "../utils/GeminiAi";
import { API_OPTION } from "../utils/constant";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);


        // search movie in tmdb
  const fetchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const json = await data.json();
    return json?.results;
  }
    catch(err){
       console.log(err)
    }
  };


    const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of five movies, comma seprated like the example result given ahead. Example : Koi Mil Gaya, Goolmaal, Gadar, sholy, Don ";

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: gptQuery,
    });

    // error handling

    const gptMovies = response?.text.split(", ");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => fetchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMoviesResult({movieResults :tmdbResults , movieSearch :gptMovies }))
  };



  return (
    <div className=" sticky top-0  z-0 absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-3/4 md:w-1/2">
      <form
        className="bg-black/100 rounded-lg flex flex-col sm:flex-row items-center p-3 gap-2 sm:gap-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 w-full sm:w-3/4 text-black bg-white rounded placeholder:text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-full sm:w-auto px-12 py-2 mx-2 bg-red-700 text-white rounded-lg mt-2 sm:mt-0"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
