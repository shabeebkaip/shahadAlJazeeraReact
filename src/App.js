import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data, categories } from './data';
import LazyLoad from 'react-lazyload';
import { Link, Element } from 'react-scroll';


const App = () => {
  return (
    <div className="h-full p-4 bg-customGray scroll-smooth duration-300">
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
                <SwiperSlide className="flex items-center border text-customYellow border-customYellow rounded-2xl " align="center" key={index}>
                  <p>
                    <Link to={item.id} smooth={true} className="no-underline scroll-smooth">{item.label}</Link>
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Element name="hotDrinks">
        <div className="mb-10" id="hotDrinks">
          <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">Hot Drinks</h1>
          <div className="grid grid-cols-2 gap-4 p-2">
            {
              data.filter((item) => item.category === 'Hot Drinks').map((item, index) => (
                <div className="flex flex-col items-center gap-3" key={index}>
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
      </Element>
      <Element name="icedDrinks">
        <div className="my-4" id="icedDrinks">
          <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">Iced Drinks</h1>
          <div className="grid grid-cols-2 gap-4 p-2">
            {
              data.filter((item) => item.category === 'Iced Drinks').map((item, index) => (
                <div className="flex flex-col items-center gap-3" key={index}>
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
      </Element>
      <Element name="mojitos">
        <div className="my-4" id="mojitos">
          <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">Mojitos </h1>
          <div className="grid grid-cols-2 gap-4 p-2">
            {
              data.filter((item) => item.category === 'Mojitos').map((item, index) => (
                <div className="flex flex-col items-center gap-3" key={index} >
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
      </Element>
      <Element name="frappes">
        <div className="my-4" id="frappes">
          <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">Frappe </h1>
          <div className="grid grid-cols-2 gap-4 p-2">
            {
              data.filter((item) => item.category === 'Frappes').map((item, index) => (
                <div className="flex flex-col items-center gap-3" key={index} >
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
      </Element>
    </div>
  )
}

export default App;
