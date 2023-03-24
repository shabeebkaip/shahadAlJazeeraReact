import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetail, Categories, Category } from './pages';
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import logo from './assets/logo.png'
const App = () => {
  console.log(window.location.href)
  return (
    <Router >
      <div className='grid w-full h-full grid-cols-1 p-4 duration-300 bg-customGray scroll-smooth overflow-y lg:w-1/3 '>
        <div className="flex flex-col items-center justify-center " align="center">
          <img src={logo} alt="jazeera" width={200} className="drop-shadow-2xl" />
        </div>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<ProductDetail />} />
          <Route path="/:category/:subCategory/:id" element={<ProductDetail />} />
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
      </div>
    </Router>
  )
}

export default App;
