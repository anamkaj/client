import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'

export interface IProductProps {
  data: IGProduct
}

export const ArticleBadges = ({ data }: IProductProps) => {
  return (
    <>
      <div className=' relative '>
        <p className=' absolute whitespace-nowrap right-16 font-light text-xs mt-0 bg-gray-100 p-1 rounded-sm'>
          <span className=' text-blue-500'>Артикул</span> : {data.article}
        </p>
      </div>
    </>
  )
}

export const QuantityBadges = ({ data }: IProductProps) => {
  return (
    <>
      <div className={'relative'}>
        <p className='absolute left-14 animate-fade-left inline-block py-0.5 px-1.5 leading-none whitespace-nowrap font-medium bg-gray-100 text-black text-[10px] rounded'>
          В наличии
          <span className='inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-red-600 text-white rounded ml-2'>
            {data.quantity}
          </span>
        </p>
      </div>
    </>
  )
}

export const SalesBadges = ({ data }: IProductProps) => {
  return (
    <div className=' relative right-[80px] top-3 text-left font-extralight text-sm uppercase text-[10px]'>
      <span className=' font-light bg-green-200 p-1 rounded-lg'>
        Купили уже
      </span>
      : <span className=' font-medium'>{data.buyAlready}</span>
    </div>
  )
}
