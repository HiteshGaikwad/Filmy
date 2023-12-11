
import { Link } from "react-router-dom";

const Hero = ({movie}) => {

    return (
        <div className='w-full sm:relative'>   
            <img className='w-screen sm:h-screen h-full max-sm:mt-[105px]' src={movie?.backdrops[2]} alt='movie poster' />
            <div className='absolute px-1  max-sm:w-screen sm:left-[60%] top-1 left-auto sm:top-1/2'>
            <h4 className="text-4xl px-3 max-sm:h-24 py-2 max-sm:text-center rounded-lg bg-gradient-to-r to-gray-700 from-black text-white">{movie?.title}</h4>
            </div>

           <Link to={"/info/"+ movie?.title.split(" ").join('-')+"/"+movie?.imdbId}>
            <img className="sm:absolute sm:top-64 sm:left-80 max-sm:mx-auto max-sm:mt-5 w-56 h-64 sm:w-56 sm:h-72 rounded-xl hover:shadow-none shadow-md shadow-white hover:scale-110 transition-all ease-linear duration-200" alt="poster" src={movie.poster}/>
            </Link>

            <div className="absolute sm:top-1/2 top-48 max-sm:ml-44 sm:left-1/2 sm:p-3 p-2 shadow-md shadow-black bg-yellow-500 rounded-full hover:scale-105">
            <Link to={"/watch/"+ movie?.trailerLink.split('=')[1]}>
                <button className=" text-center ml-2 sm:text-5xl text-3xl text-black font-bold">▷</button>
                </Link>
            </div>

        </div>
    );
};

export default Hero;
