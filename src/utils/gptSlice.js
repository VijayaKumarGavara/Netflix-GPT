import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{showGptSearch:false, gptMovieResults:null},
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state, action)=>{
            state.gptMovieResults=action.payload;
        }
    }
})

export const {toggleGptSearchView, addGptMovieResults}=gptSlice.actions;
export default gptSlice.reducer;