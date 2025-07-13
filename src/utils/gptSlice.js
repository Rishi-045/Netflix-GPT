import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieResults : null,
        movieSearch : null,
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResult : (state,action)=>{
            const {movieResults,movieSearch} = action.payload;
            state.movieResults = movieResults;
            state.movieSearch = movieSearch;
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;

export default gptSlice.reducer;