import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addReviews } from '../utils/reviewsSlice';

const AddReview = ({imdbId}) => {

    const [review, setReview]= useState('');
    const dispatch= useDispatch();

    const addReview=async ()=>{
      if(review!==''){
        const response = await axios.post("https://movies-api-production-03bc.up.railway.app/api/v1/reviews", { reviewBody: review, imdbId: imdbId });
      dispatch(addReviews(review));
        setReview("");
      }
    }

  return (
    <form className='sm:p-3 p-1 flex flex-col sm:bg-gray-200 sm:rounded-xl gap-1' onSubmit={(e)=>{e.preventDefault(); addReview()}}>
        <h3 className='text-lg'>Write a review...</h3>
        <textarea onChange={(e)=>{setReview(e.target.value);}} value={review} className='rounded-xl shadow-lg shadow-gray-800 outline-none max-sm:w-full py-2 px-3 text-xl font-semibold' cols={60} rows={7}/>
        <button type='submit' className=' py-2 mt-2 px-3 w-40 max-sm:ml-3 text-white font-bold hover:scale-105 transition-all ease-linear duration-200 bg-gradient-to-r from-red-600 hover:bg-gradient-to-l hover:from-red-600 shadow-xl shadow-gray-500 rounded-full'>Add review</button>
    </form>
  )
}

export default AddReview