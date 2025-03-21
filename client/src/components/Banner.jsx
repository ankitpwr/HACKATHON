import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import {useNavigate} from 'react-router-dom'
function Banner() {
    const navigate = useNavigate()
    return (
        <div className='flex bg-green-100 rounded-lg px-6 sm:px-10 lg:px-12 my-20 md:mx-10'>
            {/* ------- Left Side ----- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font semibold text-blue-800'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctor</p>
                </div>
                <button onClick={()=>{navigate('/login')}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
            </div>
            {/* ------- Right Side ----- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner