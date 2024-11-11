import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({ title, desc }) => {
    return (
        <div className='w-[vw] absolute text-white pt-[18%] p-12 '>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='w-1/3 mt-4'>{desc}</p>

            <div className=' flex mt-5 '>
                <button className=' flex items-center px-6 py-2 mr-2 bg-white text-black rounded-md hover:bg-opacity-80'><FaPlay /><span className='ml-1'>Play</span></button>
                <button className='flex items-center px-6 py-2 border-2 border-gray-400  text-white rounded-md hover:bg-white hover:text-black'><IoMdInformationCircleOutline size={22} /> <span className='ml-1'>Watch more</span></button>
            </div>
        </div>
    )
}

export default VideoTitle