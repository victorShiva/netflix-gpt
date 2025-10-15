import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        populerMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopulerMovies: (state, action) => {
            state.populerMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideos, addPopulerMovies } = moviesSlice.actions;