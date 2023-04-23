import React from 'react'
import { Link } from 'react-router-dom'

type PropBtn = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const LinkToCart = () => {
  return (
    <div>
      <Link to={'/order'}>
        <button className=' w-[250px] border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>
          Перейти в карзину
        </button>
      </Link>
    </div>
  )
}

export const ContinueShopping = ({ setActive }: PropBtn) => {
  return (
    <div>
      <button
        onClick={() => setActive(false)}
        className=' w-[250px] border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline'
      >
        Продолжить покупки
      </button>
    </div>
  )
}
