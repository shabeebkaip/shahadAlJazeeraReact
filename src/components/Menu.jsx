import React from 'react'
import LazyLoad from 'react-lazyload'

const Menu = ({ data, title }) => {
  return (
    <div className="mb-10" >
      <h1 className="mb-10 text-2xl font-semibold text-center text-customYellow">{title}</h1>
      <div className="grid grid-cols-2 gap-4 p-2">
        {
          data.map((item, index) => (
            <div className="flex flex-col items-center gap-3 " key={index}>
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
  )
}

export default Menu