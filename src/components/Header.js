import React, { useState } from 'react'
import logo from "../utils/images/logo.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateMenu } from '../utils/menuSlice';

const Header = () => {

  const dispatch= useDispatch();
  
const [isMenuOpen, setIsMenuOpen]= useState(false);

  return (
    <div className={'flex justify-between max-sm:bg-slate-400 sm:fixed top-0 z-50 w-screen sm:backdrop-blur-sm'}>
        <div className='flex items-center gap-5 px-3 '>
            <img className='w-14 mt-1 h-14 rounded-full mix-blend-darken hover:scale-105 transition-all ease-linear duration-200' src={logo}/>
           <Link className='no-underline text-black' to={"/"}><h2 className='max-sm:hidden text-xl px-3 mt-2 py-1 rounded-xl  bg-blue-200 hover:bg-blue-400  font-bold'>Home</h2></Link>
           <h2 className='max-sm:hidden text-xl px-3 mt-2 py-1 rounded-xl  bg-blue-200 hover:bg-blue-400  font-bold'>Watch List</h2>
    </div>
    <div className='flex items-center gap-5 px-3 mr-3'>

      {/* hamburger menu for small devices */}
        <h1 onClick={()=>{setIsMenuOpen(true);dispatch(updateMenu(true))}} className={'sm:hidden text-5xl hover:cursor-pointer hover:scale-110 transition-all ease-linear duration-200'+ (!isMenuOpen?'flex':'hidden')}>≡</h1>
        {/* navigation bar for small devices */}
        <div className={'sm:hidden flex-col w-screen bg-white h-screen left-0 absolute top-0 z-50 justify-center items-center  ' + (isMenuOpen?'flex':'hidden')}>
          <h1 onClick={()=>{setIsMenuOpen(false);dispatch(updateMenu(false))}} className='sm:hidden hover:cursor-pointer text-5xl absolute top-7'>×</h1>
          <ul className='flex flex-col gap-4'>
            <Link onClick={()=>{setIsMenuOpen(false);dispatch(updateMenu(false))}} className='text-black no-underline' to={"/"}><li className='px-3 py-2 rounded-full hover:scale-105 transition-all ease-linear duration-200 text-center text-xl font-bold bg-gradient-to-l from-blue-400 to-red-400 hover:from-blue-600 hover:to-red-600 hover:text-white'>Home</li></Link>

            <li className='px-3 py-2 rounded-full hover:scale-105 transition-all ease-linear duration-200 text-center text-xl font-bold bg-gradient-to-l from-red-400 to-blue-400 hover:from-red-600 hover:to-blue-600 hover:text-white'>Watch List</li>

            <li className='px-3 py-2 rounded-full hover:scale-105 transition-all ease-linear duration-200 text-center text-xl font-bold bg-gradient-to-l from-blue-400 to-red-400 hover:from-blue-600 hover:to-red-600 hover:text-white'>Log in</li>

            <li className='px-3 py-2 rounded-full hover:scale-105 transition-all ease-linear duration-200 text-center text-xl font-bold bg-gradient-to-l from-red-400 to-blue-400 hover:from-red-600 hover:to-blue-600 hover:text-white'>Register</li>
          </ul>
        </div>
        <button className='max-sm:hidden text-xl px-3 mt-2 py-1 rounded-xl  bg-blue-200 hover:bg-blue-400  font-bold'>Login</button>
        <button className='max-sm:hidden text-xl px-3 mt-2 py-1 rounded-xl  bg-blue-200 hover:bg-blue-400  font-bold'>Register</button>
    </div>
    </div>
  )
}

export default Header