import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useParams } from 'react-router-dom'
import { data } from '../data'
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload'


const ProductDetail = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate();
  useEffect(() => {
    setProduct(data.find(item => item.id == id))
  }, [id])

  return (
    <div className='h-full'>
      <div className="flex flex-col items-center justify-center " onClick={() => navigate('/')}>
        <img src={logo} alt="jazeera" width={200} />
      </div>
      {
        product &&
        <div className='flex flex-col gap-5 p-4'>
          <div>
            <LazyLoad once>
              <img
                src={product.img}
                alt={product.name}
                className="object-cover rounded shadow-2xl aspect-[12/13] "
              />
            </LazyLoad>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2 p-4 bg-descBg '>
            <h1 className='text-2xl font-semibold text-center text-customYellow '>{product.name}</h1>
            <p className='text-center text-customYellow'>{product.price}</p>
            <p className='font-semibold text-center text-white' >{product.description}</p>
          </div>

        </div>
      }

    </div>
  )
}

export default ProductDetail