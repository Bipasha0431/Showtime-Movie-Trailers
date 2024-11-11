import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';
const VideoBg = ({ id, bool }) => {
    const trailer = useSelector((store) => store.movie.movieTrailer);
    console.log(id);
    useMovieById(id);
    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe

                className={`${bool ? "w-[100%] aspect-video " : "w-screen aspect-video"} `}
                src={`https://www.youtube.com/embed/${trailer?.key}?si=FrCSnZwNZEwKR6e1&autoplay=1&mute=1`}
                title="YouTube video player" frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBg