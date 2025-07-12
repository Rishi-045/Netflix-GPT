import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
// import client from "../utils/openAi";
import ai from "../utils/GeminiAi";

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config?.lang)
  const searchText = useRef(null)
 
  const handleGptSearchClick = async () =>{

   const gptQuery = "Act as a movie recommendation system suggest some movies for the query :" + searchText.current.value + ". only give me names of five movies, comma seprated like the example result given ahead. Example : Koi Mil Gaya, Goolmaal, Gadar, sholy, Don "

const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: gptQuery,
  });

  // error handling 

  const gptMovies =  response?.text.split(", ")
  console.log(gptMovies);

  }

  return (
    <div className="absolute bottom-[70%] left-[25%] w-1/2">
      <form className=" bg-black rounded-lg " onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-2 m-4 text-black bg-white w-3/4 placeholder:text-black rounded"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=" px-8 p-2 bg-red-700  text-white rounded-lg" onClick={handleGptSearchClick}>
            {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
