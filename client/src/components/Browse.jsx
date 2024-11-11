import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Movie from "./Movie.jsx";
import BrowseContainer from './BrowseContainer.jsx';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import SearchMovie from './SearchMovie.jsx';



const Browse = () => {
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector((store) => store.movie.toggle);
    const navigate = useNavigate();

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }

    }, [])

    return (
        <div>
            {console.log("Toggle value inside render:", toggle)}
            {
                toggle ? <SearchMovie /> : (
                    <>
                        <BrowseContainer />
                        <Movie />
                    </>)
            }

        </div>
    )
}

export default Browse