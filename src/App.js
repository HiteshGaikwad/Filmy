
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { addMovies } from './utils/moviesSlice';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Shimmer from './components/Shimmer';


function App() {

  const dispatch= useDispatch();
  const [movies, setMovies]=useState([]);

  useEffect(()=>{
    getMovies();
  },[]);

  const getMovies= async ()=>{

    try{
      const response= await fetch("https://movies-api-hiteshgaikwad.vercel.app/api/v1/movies");
      const data= await response.json();

      // console.log(data)
      setMovies(data);
      dispatch(addMovies(data));

    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className='sm:w-screen h-screen sm:overflow-hidden max-sm:bg-gradient-to-t from-gray-500 to-slate-500'>
    <Header/>
    { movies.length===0?<Shimmer/>:
    <Outlet/>
}
    </div>
  );
}

export default App;
