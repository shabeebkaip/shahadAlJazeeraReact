import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useParams, useNavigate } from 'react-router-dom'
import { menu } from '../data'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import LazyLoad from 'react-lazyload';


const ProductDetail = () => {
  const [products, setProducts] = useState()
  const params = useParams()
  const navigate = useNavigate()
  console.log(products, 'products')
  useEffect(() => {
    const category = menu.categories.find(item => item.url === params.category)
    if (params.subCategory) {
      const subCategory = category.subCategories.find(item => item.url === params.subCategory)
      setProducts(subCategory.items)
    } else {
      setProducts(category.items)
    }
  }, [params])
  return (
    <div className='h-full'>
      <Swiper
        spaceBetween={50}
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        initialSlide={params.id - 1}
      >
        {
          products && products.map((product, index) => {
            return (
              <SwiperSlide key={index} >
                <div className='flex flex-col gap-5 p-4 mb-10'>
                  <div>
                    <LazyLoad height={200} once>
                      <LazyLoadImage
                        src={product.img}
                        alt={product.name}
                        className="object-cover rounded shadow-2xl "
                        effect="blur"
                      />
                    </LazyLoad>
                  </div>
                  <div className='flex flex-col flex-wrap items-center gap-2 p-4 bg-descBg '>
                    <h1 className='text-xl font-semibold text-center uppercase text-customYellow'>{product.name}</h1>
                    <p className='font-semibold text-center text-customYellow'>{product.price}</p>
                    <p className='text-center text-white ' >{product.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      {/* {
        products && 
        <div className='flex flex-col gap-5 p-4 mb-10'>
          <div>
            <LazyLoadImage
              src={product.img}
              alt={product.name}
              className="object-cover rounded shadow-2xl "
            />
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2 p-4 bg-descBg '>
            <h1 className='text-xl font-semibold text-center uppercase text-customYellow'>{product.name}</h1>
            <p className='font-semibold text-center text-customYellow'>{product.price}</p>
            <p className='text-center text-white ' >{product.description}</p>
          </div>
        </div>
      }
      {
        product &&
        <span className="fixed bottom-0 left-0 right-0 p-4 ">
          <a href={`/?${product.query}`}>
            <button className='flex items-center px-4 py-1 text-white border border-customYellow rounded-2xl'><IoIosArrowRoundBack className='text-2xl text-customYellow' /> Back</button>
          </a>
        </span>
      } */}
    </div>
  )
}

export default ProductDetail