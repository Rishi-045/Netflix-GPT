import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config?.lang)

  return (
    <div className="absolute bottom-[70%] left-[25%] w-1/2">
      <form className=" bg-black rounded-lg ">
        <input
          type="text"
          className="p-2 m-4 text-black bg-white w-3/4 placeholder:text-black rounded"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=" px-8 p-2 bg-red-700  text-white rounded-lg">
            {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
