import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: 'movies',
    initialState: {
        moviesList:[],
    },
    reducers:{
        addMovies:(state, action)=>{
            state.moviesList=[...action.payload];
        }
    }
})
export const {addMovies}= moviesSlice.actions;

export default moviesSlice.reducer;