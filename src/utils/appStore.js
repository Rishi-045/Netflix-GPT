import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"

const appStore = configureStore(
    {
        reducer : {
           user : userSliceReducer,
           movies : moviesReducer,
           gpt : gptReducer,
        },
        devTools: true,
    }
)


export default appStore;