import React from 'react'
import LazyLoad from 'react-lazyload'

const Food = ({ item, index }) => {
  console.log(item)
  return (
    <div className="flex flex-col items-center gap-3 " key={index}>
      <LazyLoad once>
        <img
          src={item.img}
          alt={item.name}
          className={`object-cover rounded shadow-2xl ${['Iced Drinks', 'Frappes'].includes(item.category) ? 'aspect-[9/16]' : ''} `}
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