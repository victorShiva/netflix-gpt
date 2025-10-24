import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toogleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export default gptSlice.reducer;
export const { toogleGPTSearchView, addGPTMovieResult } = gptSlice.actions;