import axios from "axios";
import { options, topRatedmovies } from "../utils/constant";
import { useDispatch } from 'react-redux';
import { getTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const res = await axios.get(topRatedmovies, options);
                dispatch(getTopRatedMovies(res.data.results));
                console.log(res.data.results);
            } catch (error) {
                console.error("Error fetching top-rated movies:", error);
            }
        };

        fetchTopRatedMovies();
    }, []);

    return null;
};

export default useTopRatedMovies;
