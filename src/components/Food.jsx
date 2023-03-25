import React from 'react'
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'

const Food = ({ item, index, params, category, subCategory }) => {
  console.log(params)
  const navigate = useNavigate()
  console.log(item)
  const handleNavigate = () => {
    console.log(category, 'category')
    console.log(params, 'params')
    console.log(subCategory, 'subCategory')
    if (subCategory) {
      navigate(`/${params.category}/${subCategory}/${item.id}`)
    } else {
      navigate(`/${params.category}/${item.id}`)
    }

  }
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer" key={index} onClick={handleNavigate}>
      <LazyLoad once>
        <LazyLoadImage
          src={item.img}
          alt={item.name}
          className={`object-cover rounded shadow-2xl ${['Iced Drinks', 'Frappes'].includes(item.category) ? 'aspect-[9/16]' : ''} `}
          effect="blur"
        />
      </LazyLoad>
      <div className="font-semibold text-customYellow " align="center">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
      </div>
    </div>


  )
}

export default Food