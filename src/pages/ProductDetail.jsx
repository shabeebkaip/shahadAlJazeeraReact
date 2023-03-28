import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { menu } from '../data'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { AiOutlineWhatsApp } from 'react-icons/ai';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import LazyLoad from 'react-lazyload';
import Back from '../components/Back';


const ProductDetail = () => {
  const [products, setProducts] = useState()
  const params = useParams()
  useEffect(() => {
    const category = menu.categories.find(item => item.url === params.category)
    if (params.subCategory) {
      const subCategory = category.subCategories.find(item => item.url === params.subCategory)
      setProducts(subCategory.items)
    } else {
      setProducts(category.items)
    }
  }, [params])
  const handleOrder = () => {
    let product = products.find(item => item.id === parseFloat(params.id))
    let message = `Hi,\n\nI would like to order the following item:\n\n${product.name}\n${product.price}\n\nThanks,\n `
    let phone = '9710545524755'; // Assuming the phone number is in the format "1234567890"
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
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
                    <button className='flex items-start gap-2 px-4 py-1 uppercase border border-customYellow rounded-2xl text-customYellow' onClick={handleOrder}> <AiOutlineWhatsApp className='text-2xl text-customYellow' /> Order now</button>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div>
        <Back url={`/${params.category}?query=${params.subCategory}`} />
      </div>
    </div>
  )
}

export default ProductDetail