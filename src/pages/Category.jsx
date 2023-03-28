import React, { useState, useEffect } from 'react'
import { menu } from '../data'
import { useParams } from 'react-router-dom'

import Food from '../components/Food'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Back from '../components/Back';
const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState({});
  const params = useParams();

  const handleTabChange = (index) => {
    setTabIndex(index);
  }
  useEffect(() => {
    let category = menu.categories.find(item => item.url === params.category);
    if (category) {
      setCategory(category);
      if (category.subCategories && category.subCategories.length) {
        setTabIndex(0)
      } else {
        setTabIndex(menu.categories.indexOf(category));
      }
    } else {
      setCategory(menu.categories[0]);
      setTabIndex(0);
    }
  }, [params.category])
  return (
    <div className='flex flex-col items-center justify-center'>
      {
        category && category.name ?
          <div className="mb-10" id="hotDrinks" >
            <h1 className="mb-4 text-xl font-semibold text-center uppercase text-customYellow">{category.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-2 my-6" align="center">
              {category.subCategories?.map((item, index) => (
                <div
                  className={`cursor-pointer text-sm  px-2 py-1 flex items-center  uppercase border text-customYellow border-customYellow rounded-2xl ${tabIndex === index ? "bg-customYellow text-white" : ''} `}
                  align="center"
                  key={index}
                  onClick={() => handleTabChange(index)}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 p-2">
              {
                category.subCategories && category.subCategories.length ? category.subCategories[tabIndex] && category.subCategories[tabIndex].items.map((item, index) => {
                  return (
                    <Food key={index} item={item} params={params} category={category} subCategory={category.subCategories[tabIndex].url} />
                  )
                }) : category.items.map((item, index) => {
                  return (
                    <Food key={index} item={item} params={params} category={category} />
                  )
                })
              }
            </div>
          </div> : null
      }
      <div>
        <Back url="/" />
      </div>
    </div >
  )
}

export default Category