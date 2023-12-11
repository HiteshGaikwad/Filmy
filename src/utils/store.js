import { configureStore } from "@reduxjs/toolkit";
import reviewsSlice from "./reviewsSlice";
import moviesSlice from "./moviesSlice";
import menuSlice from "./menuSlice";


const store= configureStore(
    {
        reducer:{
            reviews: reviewsSlice,
            movies: moviesSlice,
            menu: menuSlice
        }
    }
)

export default store;