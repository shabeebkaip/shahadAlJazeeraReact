import React from 'react'
import { menu } from '../data'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center h-full mb-4'  >
      {
        menu.categories.map((item, index) => (
          <div key={index} className="w-full p-4 text-center uppercase" onClick={() => navigate(`/${item.url}`)}>
            <div className="px-4 py-2 font-semibold duration-300 border rounded-full shadow hover:bg-customYellow hover:text-white text-customYellow border-customYellow hover:cursor-pointer hover:scale-105">
              {item.name}
            </div>
          </div>))
      }
    </div>
  )
}

export default Categories