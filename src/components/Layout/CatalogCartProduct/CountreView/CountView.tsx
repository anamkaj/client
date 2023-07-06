import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { CountViewGrid } from '../Grid/CountViewGrid'
import { Reviews } from '../Reviews'
import { WatchProduct } from './WatchProduct'

interface IProductProps {
  data: IGProduct
  gridStore: boolean
  URL: string
}

{
  /*Счетчик просмотров*/
}

export const CountView = ({ data, gridStore, URL }: IProductProps) => {
  // _____________________________________
  // Горизонтальная сетка
  // _____________________________________

  if (!gridStore) {
    return <CountViewGrid data={data} URL={URL} />
  }

  return (
    <div className='flex flex-col items-center mt-2 '>
      <div className='flex items-center '>
        {/*Счетчик просмотров*/}
        <WatchProduct data={data} />

        {/*Счетчик Рейтинг и отзывы*/}
        <div>
          <div className='flex items-center p-2'>
            {data.rating > 2 ? (
              <p className=' flex ml-2 text-sm font-bold text-red-500'>
                <span className=' mr-2 '>
                  <HiOutlineArrowTrendingUp className=' w-5 h-5' />
                </span>
                {data.rating}
              </p>
            ) : (
              <p className=' flex ml-2 text-sm font-bold text-violet-400'>
                <span className=' mr-2 '>
                  <HiOutlineArrowTrendingUp className=' w-5 h-5' />
                </span>
                {data.rating}
              </p>
            )}
            <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full '></span>
            <Reviews data={data} URL={URL} />
          </div>
        </div>
      </div>
    </div>
  )
}
