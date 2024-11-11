import axios from 'axios';
import { getUpcomingMovies } from '../redux/movieSlice';
import { options, upcomingmovies } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const res = await axios.get(upcomingmovies, options);
                dispatch(getUpcomingMovies(res.data.results));
                console.log(res.data.results);
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchUpcomingMovies();
    }, []);

    return null;
};

export default useUpcomingMovies;
