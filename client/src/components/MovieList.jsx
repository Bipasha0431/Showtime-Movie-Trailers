import React from 'react';
import MovieCard from './MovieCard';
import { movieCardBanner } from '../utils/constant';

const MovieList = ({ title, movies, searchMovie = false }) => {
    return (
        <div className={`${searchMovie ? 'flex flex-col justify-center items-center' : ''}`}>
            <h1 className="uppercase text-3xl py-5 text-white">{title}</h1>

            {/* Check if movies exist and are not empty */}
            {movies && movies.length > 0 ? (
                <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
                    <div className={`${searchMovie ? 'flex flex-wrap justify-center' : 'flex'}`}>
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie_id={movie.id}
                                image={movieCardBanner + movie.poster_path}
                                posterpath={movie.poster_path}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <h1 className="text-center mt-5 text-white">Movie Not Found!!</h1>
            )}
        </div>
    );
};

export default MovieList;
