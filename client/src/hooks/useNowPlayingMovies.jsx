import axios from 'axios';
import { nowPlaying, options } from '../utils/constant.js';
import { getNowPlayingMovies } from '../redux/movieSlice.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const res = await axios.get(nowPlaying, options);
                dispatch(getNowPlayingMovies(res.data.results));
                console.log(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNowPlayingMovies();
    }, []); // Dependency array to avoid repeated calls

    return null; // Hooks should not return anything unless needed
};

export default useNowPlayingMovies;
