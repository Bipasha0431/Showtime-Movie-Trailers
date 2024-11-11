import axios from "axios";
import { options, popularmovies } from "../utils/constant";
import { useDispatch } from 'react-redux';
import { getPopularMovies } from "../redux/movieSlice";
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const res = await axios.get(popularmovies, options);
                dispatch(getPopularMovies(res.data.results));
                console.log(res.data.results);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchPopularMovies();
    }, []);

    return null;
};

export default usePopularMovies;
