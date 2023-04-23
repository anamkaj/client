import React from 'react'
import { IGProduct } from '../../../../helpers/model/model.products'
import { IProductProps } from '../Badges/Badges'

export const ArticleBadgesGrid = ({ data }: IProductProps) => {
  return (
    <>
      <div className=' relative '>
        <p className='  whitespace-nowrap right-16 font-light text-sm mt-0 bg-gray-100 p-1 rounded-sm'>
          <span className=' text-blue-500'>Артикул</span> : {data.article}
        </p>
      </div>
    </>
  )
}

export const QuantityBadgesGrid = ({ data }: IProductProps) => {
  return (
    <>
      <div className={'relative'}>
        <p className=' left-14 animate-fade-left inline-block py-0.5 px-1.5 leading-none whitespace-nowrap font-medium bg-gray-100 text-black text-[14px]  rounded'>
          В наличии
          <span className='inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-red-600 text-white rounded ml-2'>
            {data.quantity}
          </span>
        </p>
      </div>
    </>
  )
}

export const SalesBadgesGrid = ({ data }: IProductProps) => {
  return (
    <div className=' flex items-center mt-7'>
      <h3 className=' uppercase text-sm font-light'>
        Купили
      </h3>
      <div>
        <h3 className=' uppercase text-sm font-medium ml-4'>{data.buyAlready} шт.</h3>
      </div>
    </div>
  )
}
