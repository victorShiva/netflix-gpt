import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        populerMovies: null,
        trendingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopulerMovies: (state, action) => {
            state.populerMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideos, addPopulerMovies, addTrendingMovies } = moviesSlice.actions;