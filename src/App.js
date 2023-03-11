import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ProductDetail } from './pages';
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
const App = () => {
  console.log(window.location.href)
  return (
    <div className='grid h-full grid-cols-1 p-4 duration-300  bg-customGray scroll-smooth lg:grid-cols-3 overflow-y '>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>

        <footer className='lg:hidden'>
          <div className={`flex flex-col items-center justify-center gap-3  mb-10 text-customYellow`} align="center">
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
        </footer>
      </Router>
    </div>
  )
}

export default App;
