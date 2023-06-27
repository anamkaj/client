import React from 'react'

import { FcTodoList } from 'react-icons/fc'
import { FcTimeline } from 'react-icons/fc'
import { FcSalesPerformance } from 'react-icons/fc'

export const ExtraBenefit = () => {
  return (
    <div className=' grid grid-cols-3 mt-10 gap-4 '>
      <div className=' flex  items-center justify-start gap-2 border shadow-md p-4'>
        <div>
          <FcTodoList className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xl'>Всегда в наличии</h2>
          <p className=' font-thin'>
            Свой собственный крупный склад в Краснодаре
          </p>
        </div>
      </div>
      <div className=' flex  items-center justify-start gap-2 border shadow-md p-4'>
        <div>
          <FcTimeline className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xl'>Ассортимент товара</h2>
          <p className=' font-thin whitespace-pre-line'>
            Большой ассортимент последних новинок от ведущих производителей
          </p>
        </div>
      </div>
      <div className=' flex  items-center justify-start gap-2 border shadow-md p-4'>
        <div>
          <FcSalesPerformance className=' w-16 h-16' />
        </div>
        <div>
          <h2 className=' font-semibold text-xl'>Постоянные скидки</h2>
          <p className=' font-thin whitespace-pre-line'>
            Индивидуальный подход и персональные скидки
          </p>
        </div>
      </div>
      
    </div>
  )
}
