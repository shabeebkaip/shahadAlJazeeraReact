import React, { useState, useEffect } from 'react'
import { menu } from '../data'
import { useParams } from 'react-router-dom'
import Food from '../components/Food'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState();
  const params = useParams();

  console.log(category)
  const handleTabChange = (index) => {
    setTabIndex(index);
  }
  useEffect(() => {
    let category = menu.categories.find(item => item.url === params.category);
    if (category) {
      setCategory(category);
      setTabIndex(menu.categories.indexOf(category));
    } else {
      setCategory(menu.categories[0]);
      setTabIndex(0);
    }
  }, [params.category])
  console.log('id', params)
  return (
    <div className='flex flex-col items-center justify-center'>
      {
        category && category.name ?
          <div className="mb-10" id="hotDrinks" >
            <h1 className="mb-4 text-xl font-semibold text-center uppercase text-customYellow">{category.name}</h1>
            <div className="flex flex-wrap items-center gap-2 my-2" align="center">
              {category.subCategories?.map((item, index) => (
                <div
                  className={`cursor-pointer text-sm  px-2 py-1 flex items-center uppercase border text-customYellow border-customYellow rounded-2xl ${tabIndex === index ? "bg-customYellow text-white" : ''} `}
                  align="center"
                  key={index}
                  onClick={() => handleTabChange(index)}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 p-2 ">
              {
                category.subCategories && category.subCategories.length ? category.subCategories[tabIndex].items.map((item, index) => (
                  <Food key={index} item={item} />
                )) : category.items.map((item, index) => (
                  <Food key={index} item={item} />
                ))
              }
            </div>
          </div> : null
      }
    </div >
  )
}

export default Category