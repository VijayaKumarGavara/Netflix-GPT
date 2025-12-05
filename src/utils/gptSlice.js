import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{showGptSearch:false, gptMovieResults:null, isLoading:false},
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state, action)=>{
            state.gptMovieResults=action.payload;
        },
        toggleSearchLoading:(state, action)=>{
            state.isLoading=!state.isLoading;
        }
    }
})

export const {toggleGptSearchView, addGptMovieResults, toggleSearchLoading}=gptSlice.actions;
export default gptSlice.reducer;