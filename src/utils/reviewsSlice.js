import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice= createSlice({
    name:"reviews",
    initialState:{
       reviewList: []
    },
    reducers:{
        addReviews:(state,action)=>{
            state.reviewList.unshift(action.payload);
        },
        storeReviews:(state,action)=>{
            state.reviewList=[];
            action.payload.map((review)=>state.reviewList.push(review.body));
        }
    }
})
export const {addReviews , storeReviews}= reviewsSlice.actions;

export default reviewsSlice.reducer;