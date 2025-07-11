import React from "react";

const GptSearchBar = () => {
  return (
    <div className="absolute bottom-[70%] left-[25%] w-1/2">
      <form className=" bg-black rounded-lg ">
        <input
          type="text"
          className="p-2 m-4 text-black bg-white w-3/4 placeholder:text-black rounded"
          placeholder="what would you like to watch today ?"
        />
        <button className=" px-8 p-2 bg-red-700  text-white rounded-lg">
            Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
