import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ProductDetail } from './pages';
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';




const App = () => {
  return (
    <div className='h-full p-4 duration-300 md:h-screen bg-customGray scroll-smooth'>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
      <footer className='lg:hidden'>
        <div className={`flex flex-col items-center justify-center gap-3 ${window.location.pathname === "/" ? 'mb-2' : 'mb-10'} text-customYellow`} align="center">
          <a href='/'>shahadaljazeerauae.com</a>
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
        {
          window.location.pathname !== '/' &&
          <span className="fixed bottom-0 left-0 right-0 p-4 ">
            <a href='/'>
              <button className='flex items-center px-4 py-1 text-white border border-customYellow rounded-2xl'><IoIosArrowRoundBack className='text-2xl text-customYellow' /> Back</button>
            </a>
          </span>
        }

      </footer>
    </div>
  )
}

export default App;
