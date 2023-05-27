import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuList } from './headerMenu'
import { Model } from '../UI/Model/Model'
import { SpecialistCall } from '../UI/Poupup/CallingSpecialist/SpecialistCall'

import { FormPerson } from '../UI/Form/FormPerson/FormPerson'

export const Menu = () => {
  const [installation, setInstallation] = useState(false)
  const [callback, setCallback] = useState(false)
  const titlePopup = 'Монтаж и Установка'
  const titlePopup2 = 'Заказать обратный звонок'

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
        <button
          onClick={() => setInstallation(true)}
          className='  bg-gray-500 text-white p-2 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible shadow-lg hover:bg-gray-600 transition duration-200 each-in-out'
        >
          Монтаж и Установка
        </button>
        <button
          onClick={() => setCallback(true)}
          className='  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-sm uppercase font-bold shadow-md rounded-lg  p-2'
        >
          Заказать обратный звонок
        </button>
      </div>
      <div hidden={!installation}>
        <Model
          active={installation}
          setActive={setInstallation}
          titleModel={titlePopup}
        >
          {
            <SpecialistCall
              specialist={installation}
              setSpecialist={setInstallation}
            />
          }
        </Model>
      </div>
      <div hidden={!callback}>
        <Model
          active={callback}
          setActive={setCallback}
          titleModel={titlePopup2}
        >
          <FormPerson />
        </Model>
      </div>
    </>
  )
}
