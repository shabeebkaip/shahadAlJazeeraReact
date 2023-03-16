import React, { useEffect, useState } from 'react'
import { categories, data } from '../data';
import logo from '../assets/logo.png'
import 'swiper/swiper.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate, } from 'react-router-dom';
import LazyLoad from 'react-lazyload';



const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState({ label: 'Hot Drinks', id: 'hotDrinks' })
  const navigate = useNavigate()
  const handleTabChange = (item, index) => {
    setTabIndex(index);
    setCategory(item);
    navigate(`/?${item.id}`)
  }
  useEffect(() => {
    let query = window.location.search;
    if (query) {

      let category = categories.find(item => query.includes(item.id));
      if (category) {
        setCategory(category);
        setTabIndex(categories.indexOf(category));
      } else {
        setCategory(categories[0]);
        setTabIndex(0);
      }

    }
  }, [])
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center py-2 " align="center">
        <img src={logo} alt="jazeera" width={200} onClick={() => navigate('/')} className="drop-shadow-2xl" />
        <div className="grid grid-cols-1">
          <div className="flex flex-wrap items-center gap-2 mb-1" align="center">
            {categories.map((item, index) => (
              <div
                className={`cursor-pointer px-2 py-1 flex items-center border text-customYellow border-customYellow rounded-2xl ${tabIndex === index ? "bg-customYellow text-white" : ''} `}
                align="center"
                key={index}
                onClick={() => handleTabChange(item, index)}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      {
        category && category.label ?
          <div className="mb-10" id="hotDrinks" >
            <h1 className="mb-2 text-2xl font-semibold text-center uppercase text-customYellow">{category.label}</h1>
            <div className="grid grid-cols-2 gap-4 p-2 ">
              {
                data.filter((item) => item.category === category.label).map((item, index) => (
                  <div className="flex flex-col items-center gap-3 duration-300 cursor-pointer"
                    key={index}
                    onClick={() => { navigate(`/product/${item.id}`) }}
                  >
                    <LazyLoad height={200} once>
                      <LazyLoadImage
                        src={item.img}
                        alt={item.name}
                        effect="blur"
                        className={`object-cover rounded shadow-3xl drop-shadow-2xl ${item.category === "Frappes" ? 'aspect-[9/16]' : ''} `}
                      />
                    </LazyLoad>
                    <div className="font-bold uppercase text-md text-customYellow" align="center">
                      <h2>{item.name}</h2>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div> : null
      }
    </div>
  )
}

export default Home