import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore(
    {
        reducer : {
           user : userSliceReducer,
           movies : moviesReducer,
           gpt : gptReducer,
           config : configReducer
        },
        devTools: true,
    }
)


export default appStore;