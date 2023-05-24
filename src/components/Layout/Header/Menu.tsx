import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from './headerMenu'

export const Menu = () => {
  return (
    <>
      <div className='flex gap-2  text-white uppercase py-2 '>
        {menuList.map((_, index) => (
          <button
            id={menuList[index].title}
            className=' rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-100 '
            key={menuList[index].id}
          >
            <Link to={menuList[index].path}>{menuList[index].title}</Link>
          </button>
        ))}
        <button className='  bg-gray-500 text-white p-2 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible shadow-lg hover:bg-gray-600 transition duration-200 each-in-out'>
          Монтаж и Установка
        </button>
        <button className='  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-sm uppercase font-bold shadow-md rounded-lg  p-2'>
          Заказать обратный звонок
        </button>
      </div>
    </>
  )
}
