import React from 'react'
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'

const Food = ({ item, index, params, category, subCategory }) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (subCategory) {
      navigate(`/${params.category}/${subCategory}/${item.id}`)
    } else {
      navigate(`/${params.category}/${item.id}`)
    }
  }
  return (
    <div className="flex flex-col items-center justify-between gap-3 cursor-pointer" key={index} onClick={handleNavigate}>
      <LazyLoad once >
        <LazyLoadImage
          src={item.img}
          alt={item.name}
          className={`object-cover w-full h-full rounded shadow-2xl ${['Iced Drinks'].includes(item.category) ? 'aspect-[6/10]': ['Customised Cakes'].includes(item.category) ? '' : 'aspect-[8/10]'}`}
          effect="blur"
        />
      </LazyLoad>
      <div className="font-semibold uppercase text-customYellow " align="center">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
      </div>
    </div>


  )
}

export default Food