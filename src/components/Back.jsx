import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const Back = ({ url }) => {
  const navigate = useNavigate()
  return (
    <div className='fixed px-4 bg-transparent border left-4 bottom-4 rounded-2xl text-customYellow border-1 border-customYellow'  >
      <button className='uppercase' onClick={() => navigate(url)}>
        back
      </button>
    </div>
  )
}

export default Back