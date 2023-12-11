
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { addMovies } from './utils/moviesSlice';
import { useDispatch } from 'react-redux';
import Header from './components/Header';


function App() {

  const dispatch= useDispatch();

  useEffect(()=>{
    getMovies();
  },[]);

  const getMovies= async ()=>{

    try{
      const response= await fetch("https://movies-api-production-03bc.up.railway.app/api/v1/movies");
      const data= await response.json();

      console.log(data)
      dispatch(addMovies(data));

    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className='sm:w-screen h-screen sm:overflow-hidden max-sm:bg-gradient-to-t from-gray-500 to-slate-500'>
    <Header/>
    <Outlet/>
    </div>
  );
}

export default App;
