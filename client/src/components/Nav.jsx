import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { API_END_POINT } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import { setToggle } from '../redux/movieSlice';
import logo from "../assets/logo.png";

const Nav = () => {
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector((store) => store.movie.toggle);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await axios.get(`${API_END_POINT}/logout`, {
            withCredentials: true
        });
        if (res) {
            toast.success(res.data.message);
            dispatch(setUserData(null));
            navigate('/');
        }
        dispatch(setToggle());
    }

    const handleSearch = () => {
        dispatch(setToggle());
    }
    return (
        <div className='absolute z-10 flex justify-between items-center w-[100%] bg-gradient-to-b from-black px-6 '>
            <img className="w-[11rem] "
                src={logo} alt='logo' />
            {
                user &&
                <div className='flex items-center'>
                    <IoIosArrowDropdown size="20px" color='white' />
                    <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
                    <div className='ml-4 '>
                        <button className='bg-red-600 px-4 py-2 text-white' onClick={handleLogout}>Logout</button>
                        <button className='ml-2 bg-red-600 px-4 py-2 text-white' onClick={handleSearch}>{toggle ? 'Home' : 'Search'}</button>
                    </div>

                </div>
            }

        </div>
    )
}

export default Nav