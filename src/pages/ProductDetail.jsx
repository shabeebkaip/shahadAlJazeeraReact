import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../data'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosArrowRoundBack } from 'react-icons/io'


const ProductDetail = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    setProduct(data.find(item => item.id == id))
  }, [id])
  return (
    <div className='h-full'>
      <div className="flex flex-col items-center justify-center " onClick={() => { navigate('/') }}>
        <img src={logo} alt="jazeera" width={200} className="cursor-pointer" />
      </div>
      {
        product &&
        <div className='flex flex-col gap-5 p-4 mb-10'>
          <div>
            <LazyLoadImage
              src={product.img}
              alt={product.name}
              className="object-cover rounded shadow-2xl aspect-[12/13] "
            />
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2 p-4 bg-descBg '>
            <h1 className='text-2xl font-semibold text-center text-customYellow '>{product.name}</h1>
            <p className='text-center text-customYellow'>{product.price}</p>
            <p className='font-semibold text-center text-white' >{product.description}</p>
          </div>
        </div>
      }
      <span className="fixed bottom-0 left-0 right-0 p-4 ">
        <button className='flex items-center px-4 py-1 text-white border border-customYellow rounded-2xl' onClick={() => navigate(`/?${product.query}`)}><IoIosArrowRoundBack className='text-2xl text-customYellow' /> Back</button>
      </span>

    </div>
  )
}

export default ProductDetail