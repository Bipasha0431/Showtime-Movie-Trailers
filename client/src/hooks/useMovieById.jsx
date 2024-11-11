import axios from 'axios';
import { options } from '../utils/constant.js';
import { getMovieTrailer } from '../redux/movieSlice.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieById = (id) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);

                const trailer = res.data.results.filter((i) => {
                    return i.type === 'Trailer';
                })

                dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));


            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieById();
    }, []); // Dependency array to avoid repeated calls


};

export default useMovieById;
