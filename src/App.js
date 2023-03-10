import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ProductDetail } from './pages';




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
    </div>
  )
}

export default App;
