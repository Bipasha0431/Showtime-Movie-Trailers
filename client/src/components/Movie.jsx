import React from 'react'
import MovieList from './MovieList.jsx'
import { useSelector } from 'react-redux'

const Movie = () => {
    const movieData = useSelector((store) => store.movie);
    console.log(movieData);
    return (
        <div className='bg-black text-white -mt-52  relative z-10'>
            <div className='px-8' >

                <MovieList title={"Popular Movies"} movies={movieData.popularMovies} />
                <MovieList title={"Now Playing Movies"} movies={movieData.nowPlayMovies} />
                <MovieList title={"Top Rated Movies"} movies={movieData.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movieData.upcomingMovies} />
            </div>

        </div >
    )
}

export default Movie