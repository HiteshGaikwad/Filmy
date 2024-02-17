import React, { useEffect, useRef, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import Reviews from './Reviews';
import AddReview from './AddReview';
import axios from 'axios';
import { storeReviews } from '../utils/reviewsSlice';

const MovieInfo = () => {

    const sliderRef = useRef(null);
    const {id} = useParams();
    const [movie, setMovie]= useState({});
    const [imdbId, setImdbId]= useState("");
    const [reviews, setReviews]= useState([]);

    const dispatch= useDispatch();

    const isMenuOpen= useSelector((store)=>store.menu.isMenuOpen);

    useEffect(()=>{
        getMovie();
        getReviews()
      },[]);
    
      const getMovie= async ()=>{
        try{
          const response= await axios.get(`https://movies-api-hiteshgaikwad.vercel.app/api/v1/movies/${id}`);
          
          setMovie(response.data);
          setImdbId(movie?.imdbId);
        } catch(err){
          console.log(err);
        }
      }

      const getReviews= async ()=>{
        const response= await fetch(`https://movies-api-hiteshgaikwad.vercel.app/api/v1/reviews/${id}`);
        
        const data= await response.json();
        setReviews(data);
        dispatch(storeReviews(data));
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const scrollLeft = () => {
        sliderRef.current.slickPrev();
    };

    const scrollRight = () => {
        sliderRef.current.slickNext();
    };

  return (
    <div className={'flex max-sm:flex-col max-sm:gap-8 bg-gradient-to-t max-sm:overflow-x-hidden max-sm:bg-gray-300 from-slate-500 w-screen sm:overflow-hidden '+(isMenuOpen?"max-sm:overflow-x-hidden max-sm:h-[80vh]":"max-sm:overflow-x-auto")}>
        <div className='sm:w-1/2 w-full p-1 flex flex-col rounded-xl '>
         <div className='flex max-sm:flex-col mt-2 relative rounded-xl sm:bg-gradient-to-l bg-gradient-to-t from-yellow-300'>
             <div className="absolute sm:top-32 top-36 left-48 sm:left-32 p-3 shadow-md shadow-black bg-yellow-500 rounded-full hover:scale-105">
            <Link to={"/watch/"+ movie?.trailerLink?.split('=')[1]}>
              <button className=" text-center ml-2 sm:text-5xl text-3xl text-black font-bold">▷</button>
              </Link>
            </div>
         <img className='sm:w-80 h-[350px] rounded-xl' src={movie?.poster} alt='movie poster' />
        <div className='sm:w-1/2 sm:mt-5 flex  max-sm:px-5 sm:flex-col gap-1 sm:gap-3'>
                <ul className='flex mt-3 flex-col list-disc'> 
                <span className='text-2xl font-bold'>Genres</span>
                    {movie?.genres?.map((genre)=>{
                        return(
                        <li className='text-lg font-semibold' key={genre}>{genre}</li>
                        )
                    })}
                </ul>

            <div className='flex max-sm:flex-col sm:gap-2 max-sm:mt-5 items-center'>
                <h2 className='text-xl pl-7 font-bold'>Release date: </h2>
                <h3 className='text-lg font-semibold'>{movie?.releaseDate}</h3>
            </div>
        </div>
        </div>
        <h1 style={{backgroundImage:`url(${movie?.poster})`}} className='font-bold text-transparent sm:my-1 max-sm:mt-3 py-2 bg-repeat bg-center bg-clip-text text-center text-4xl sm:text-[49px]'>{movie?.title}</h1>
        <Slider className='sm:w-2/3 w-[87%] sm:mt-2 max-sm:mx-4 sm:mx-auto shadow-xl shadow-white' {...settings} ref={sliderRef}>
            {
                movie?.backdrops?.map((poster,index)=>{
                    return(
                        <img key={index} className='w-20 h-60 rounded-xl' alt='poster' src={poster}/>
                    )
                })
            }
        </Slider>
        <button  onClick={scrollLeft}></button>
        <button  onClick={scrollRight}></button>
         </div>
         <div className='flex sm:z-50 flex-col gap-3 sm:w-1/2 sm:h-screen'>
            <AddReview imdbId={movie?.imdbId}/>
            <Reviews/>   
         </div>
    </div>
  )
}

export default MovieInfo
