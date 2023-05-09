import React from 'react'

import { FcFlashOn } from 'react-icons/fc'
import { FcManager } from 'react-icons/fc'
import { FcRight } from 'react-icons/fc'

type PropCallSpec = {
  setSpecialist: React.Dispatch<React.SetStateAction<boolean>>
}

export const CallSingleCart = ({ setSpecialist }: PropCallSpec) => {
  return (
    <>
      <div className={'mt-6'}>
        <div className=' shadow-lg shadow-black-900 flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4  text-black bg-slate-100 '>
          <div className='flex flex-row items-center space-x-3'>
            <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-purple-700 text-white'>
              <FcFlashOn className=' w-8 h-8 animate-pulse' />
            </div>
            <span className='text-base font-medium uppercase'>
              Заказать выезд специалиста{' '}
              <span className=' lowercase text-amber-600'>
                (бесплатно по городу)
              </span>
            </span>
          </div>
          <div>
            {' '}
            Ответьте на несколько вопросов и наш специалист сможет приехать в
            удобное для Вас время
          </div>
          <div className='flex justify-between items-center'>
            <div className=' flex gap-2 items-center'>
              <FcManager className=' w-6 h-6' />
              <p className=' underline'>Гарантия на монтажные работы</p>
            </div>
            <button
              onClick={() => setSpecialist(true)}
              className='  font-extralight flex items-center gap-2  text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-100'
            >
              <span>Монтаж</span>
              <FcRight className=' h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
