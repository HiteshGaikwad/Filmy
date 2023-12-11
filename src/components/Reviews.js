import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Reviews = () => {

  const reviews= useSelector((store)=>store.reviews.reviewList);

  return (
    <div className='flex flex-col sm:ml-10 pl-2 gap-1 sm:overflow-y-auto'>
        <h1 className='text-3xl max-sm:ml-5 font-bold'>{reviews?.length} {reviews?.length===1?"Review":"Reviews"} </h1>
        <div className='w-full sm:overflow-y-auto'>
        {
         reviews?.map((review,index)=>{
                return(
                    <h3 className='sm:text-xl text-lg text-white font-semibold px-3 max-sm:px-2 py-2 max-sm:py-2 bg-gradient-to-r from-gray-800 rounded-lg ' key={index}>{review}</h3>
                )
            })
        }
        </div>
    </div>
  )
}

export default Reviews;