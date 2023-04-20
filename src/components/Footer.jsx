import React from 'react'
import eidMubarak from '../assets/Eid Calligraphy (1).png';
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';


const Footer = () => {
  return (
    <footer className=''>

      <div className={`flex flex-col items-center justify-center gap-1  text-customYellow`} align="center">
        <div>
          <img src={eidMubarak} alt="ramadanKareem" className='w-40' />
        </div>
        <a href='/'>shahadaljazeerauae.com</a>

        <div className='flex items-center justify-center gap-2'>
          <div className='flex items-center font-semibold'>
            <p className='flex items-center gap-1 text-xs text-customYellow'><HiLocationMarker className='text-md text-customYellow' /> 𝗝ahili,</p>
            <p className='flex items-center gap-1 text-xs text-customYellow'>&nbsp; <HiLocationMarker className='text-md text-customYellow' /> Zakher ,</p>
            <p className='flex items-center gap-1 text-xs text-customYellow'>&nbsp; <HiLocationMarker className='text-md text-customYellow' /> Hili Naifa,</p>
            <p className='flex items-center gap-1 text-xs text-customYellow'>&nbsp; <HiLocationMarker className='text-md text-customYellow' /> Al Aamerah </p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <a href='https://www.instagram.com/shahadaljazeerauae/'><AiFillInstagram className='text-2xl text-customYellow' /></a>
          <a href='https://www.facebook.com/shahadaljazeerauae/'><AiFillFacebook className='text-2xl text-customYellow' /></a>
          <a href='https://t.snapchat.com/HkxyXJMp'><FaSnapchatGhost className='text-2xl text-customYellow' /></a>
          <a href='https://wa.me/9710545524755'><AiOutlineWhatsApp className='text-2xl text-customYellow' /></a>
          <a href='tel:+971600569996'><IoIosCall className='text-2xl text-customYellow' /></a>
        </div>
        <div>
          <p className='text-xs text-customYellow'>© 2023 Shahad Al Jazeera. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer