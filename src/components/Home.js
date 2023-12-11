import React, { useRef } from 'react'
import Hero from './Hero'
import { useSelector } from 'react-redux';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

    const movies = useSelector((store) => store.movies.moviesList);
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.slickPrev();
    };

    const scrollRight = () => {
        sliderRef.current.slickNext();
    };

  return (
    <div className='w-screen sm:h-screen overflow-hidden relative '>
       <Slider {...settings} ref={sliderRef}>
        {
            movies.map((movie)=>{
                return (
                 <Hero key={movie?.imdbId} movie={movie}/>
                )
            })
        }
        </Slider>
        <button className='absolute sm:m-4 sm:text-5xl text-2xl px-3 pt-1 pb-2 rounded-full text-center bg-gradient-to-b bg-transparent from-gray-800 text-white sm:top-1/2 top-48 left-0' onClick={scrollLeft}>{"<"}</button>
        <button className='absolute sm:m-4 sm:text-5xl text-2xl px-3 pt-1 pb-2 rounded-full text-center bg-gradient-to-b bg-transparent from-gray-800 text-white sm:top-1/2 top-48 right-0' onClick={scrollRight}>{">"}</button>
    </div>
  )
}

export default Home