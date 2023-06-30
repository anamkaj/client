import React from 'react'

import { FcTodoList } from 'react-icons/fc'
import { FcTimeline } from 'react-icons/fc'
import { FcSalesPerformance } from 'react-icons/fc'

export const ExtraBenefit = () => {
  return (
    <div className=' flex items-center justify-center gap-2 flex-wrap mt-2 lg:mt-10 w-full md:justify-between lg:gap-4  '>

      <div className=' flex items-center justify-start  gap-2 border shadow-md p-4 w-[400px] md:w-full xl:w-[430px] text-xs lg:text-lg '>
        <div>
          <FcTodoList className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xs lg:text-lg'>Всегда в наличии</h2>
          <p className=' font-thin'>
            Свой собственный крупный склад в Краснодаре
          </p>
        </div>
      </div>
      <div className=' flex  items-center justify-start   gap-2 border shadow-md p-4  w-[400px] md:w-full xl:w-[430px] text-xs lg:text-lg'>
        <div>
          <FcTimeline className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xs lg:text-lg'>Ассортимент товара</h2>
          <p className=' font-thin whitespace-pre-line'>
            Большой ассортимент последних новинок от ведущих производителей
          </p>
        </div>
      </div>
      <div className=' flex  items-center justify-start  gap-2 border shadow-md p-4  w-[400px] md:w-full xl:w-[430px] text-xs lg:text-lg'>
        <div>
          <FcSalesPerformance className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xs lg:text-lg'>Постоянные скидки</h2>
          <p className=' font-thin whitespace-pre-line'>
            Индивидуальный подход и персональные скидки
          </p>
        </div>
      </div>
    </div>
  )
}
