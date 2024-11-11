import React, { useState } from 'react'
import axios from 'axios';
import { API_END_POINT } from '../utils/constant.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';



const Login = () => {
    const [isLogin, setLogin] = useState(true);
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""

    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('User Payload:', user);
        if (isLogin) {
            try {
                const res = await axios.post(`${API_END_POINT}/signin`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // for cookies in browser as cors
                });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                dispatch(setUserData(res.data.user));
                navigate('/browse');
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
        } else {
            try {
                const res = await axios.post(`${API_END_POINT}/signup`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                if (res.data.success) {
                    toast.success(res.data.message);
                }
                setLogin(true);

            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
        }


        setUser({
            fullName: "",
            email: "",
            password: ""
        });
    }
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const loginHandler = () => {
        setLogin((prev) => !prev);
    }

    return (
        <div>
            <div className='absolute w-full h-full'>
                <img className="w-full h-full " src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="bg" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <form onSubmit={submitHandler} className='absolute sm:w-3/12 w-7/12 p-12 left-0 right-0 mx-auto flex flex-col justify-center my-36 items-center bg-black opacity-85 rounded-md'>
                <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Sign In" : "Sign Up"}</h1>
                <div className='flex flex-col  '>
                    {
                        !isLogin && <input
                            type="text"
                            value={user.fullName}
                            name='fullName'
                            placeholder='FullName' className='outline-none p-3 mt-2 rounded-sm bg-gray-700'
                            onChange={inputHandler} />
                    }

                    <input
                        type="text"
                        value={user.email}
                        name='email'
                        placeholder='Email' className='outline-none p-3 mt-2  bg-gray-700' onChange={inputHandler} />
                    <input
                        type="password"
                        value={user.password}
                        name='password'
                        placeholder='Password' className='outline-none p-3 mt-2  bg-gray-700' onChange={inputHandler} />
                    <button className='text-white bg-red-600 mt-3 py-2 font-bold rounded-sm'>{isLogin ? "SignIn" : "SignUp"}</button>
                    <h1 className='text-white mt-2'> {isLogin ? "New to Showtime ?" : "Already a user ?"} <span className='text-red-600 cursor-pointer font-bold' onClick={loginHandler}>{isLogin ? "SignUp" : "SignIn"}</span> </h1>

                </div>

            </form>


        </div >
    )
}

export default Login