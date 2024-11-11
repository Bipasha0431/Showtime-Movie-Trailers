import React from 'react'
import { useDispatch } from 'react-redux';
import { getMovieId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterpath, image, movie_id }) => {
    const dispatch = useDispatch();
    if (posterpath == null) return;


    const handleOpen = () => {
        dispatch(getMovieId(movie_id));
        dispatch(setOpen(true));
    }
    return (
        <div className='w-48 pr-2 ' onClick={handleOpen}>
            <img src={image} alt="movie-banner" />

        </div>
    )
}

export default MovieCard