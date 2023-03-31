import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetail, Categories, Category } from './pages';
import { Footer } from './components';

import logo from './assets/logo.png'
const App = () => {
  return (
    <Router >
      <div className='grid w-full h-full grid-cols-1 p-4 duration-300 bg-customGray scroll-smooth overflow-y lg:w-1/3 '>
        <div className="flex flex-col items-center justify-center " align="center">
          <img src={logo} alt="jazeera" width={200} className="drop-shadow-2xl" />
        </div>
        <Routes>
          <Route path="/" element={<Categories />} exact={true} />
          <Route path="/:category" element={<Category />} exact={true} />
          <Route path="/:category/:id" element={<ProductDetail />} exact={true} />
          <Route path="/:category/:subCategory/:id" element={<ProductDetail />} exact={true} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
