import React, { useState } from 'react';
import axios from 'axios'
import { CiSearch } from "react-icons/ci"
import { options, searchMovieURL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchMovieDetails } from '../redux/searchSlice';
import MovieList from './MovieList.jsx';
const SearchMovie = () => {
    const [input, setinput] = useState("");
    const dispatch = useDispatch();

    const { searchInput, searchedMovie } = useSelector(store => store.search);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(`${searchMovieURL}${input}&include_adult=false&language=en-US&page=1`, options);
            console.log(res.data);
            const searchedMovies = res?.data?.results;
            dispatch(setSearchMovieDetails({ input, searchedMovies }))
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className=' bg-slate-900 min-h-screen'>
            <div className='flex justify-center pt-[10%] w-[100%]'>
                <form onSubmit={handleSubmit} className='flex justify-between  w-[50%] border-2 rounded-md'>
                    <input type="text" value={input} placeholder='Search Movies....' className='w-full py-3 px-8 outline-none ' onChange={(e) => { setinput(e.target.value) }} />
                    <button className='bg-red-500 text-white py-3 px-7 '><CiSearch size='25' /></button>



                </form>
            </div>


            <div className=' m-5'>

                <MovieList title={searchInput} searchMovie={true} movies={searchedMovie} />

            </div>

        </div>

    )
}

export default SearchMovie