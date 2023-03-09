import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { Swiper, SwiperSlide } from 'swiper/react';
import { categories, data } from '../data';
import logo from '../assets/logo.png'
import 'swiper/swiper.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState({ label: 'Hot Drinks', id: 'hotDrinks' })
  const navigate = useNavigate();
  const handleTabChange = (item, index) => {
    setTabIndex(index);
    setCategory(item);
  }
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center py-4 ">
        <img src={logo} alt="jazeera" width={200} />
        <div className="grid grid-cols-1">
          <div className="mb-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={2.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {categories.map((item, index) => (
                <SwiperSlide
                  className={`cursor-pointer flex items-center border text-customYellow border-customYellow rounded-2xl ${tabIndex === index ? "bg-customYellow text-white" : ''} `}
                  align="center"
                  key={index}
                  onClick={() => handleTabChange(item, index)}>
                  {item.label}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="mb-10" id="hotDrinks" >
        <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">{category.label}</h1>
        <div className="grid grid-cols-2 gap-4 p-2">
          {
            data.filter((item) => item.category === category.label).map((item, index) => (
              <div className="flex flex-col items-center gap-3 duration-300 hover:scale-105"
                key={index}
                onClick={() => navigate(`product/${item.id}`)}
              >
                <LazyLoad once>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover rounded shadow-2xl "
                  />
                </LazyLoad>

                <div className="font-semibold text-customYellow " align="center">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home