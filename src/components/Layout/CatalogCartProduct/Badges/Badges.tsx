import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'

export interface IProductProps {
  data: IGProduct
}

export const ArticleBadges = ({ data }: IProductProps) => {
  return (
    <>
      <p className='  whitespace-nowrap right-12 font-light text-xs mt-0 bg-gray-100 p-1 rounded-sm'>
        <span className=' text-blue-500'>Артикул</span> : {data.article}
      </p>
    </>
  )
}

export const QuantityBadges = ({ data }: IProductProps) => {
  return (
    <>
      <p className=' left-14 inline-block py-0.5 px-1.5 leading-none whitespace-nowrap font-medium bg-gray-100 text-black text-[10px] rounded'>
        В наличии
        <span className='inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-red-600 text-white rounded ml-2'>
          {data.quantity}
        </span>
      </p>
    </>
  )
}

export const SalesBadges = ({ data }: IProductProps) => {
  return (
    <div className=' w-full ml-4 mt-auto flex items-start gap-1 right-[80px] font-extralight uppercase text-[10px]'>
      <span className=' font-light bg-green-200 p-1 rounded-lg'>
        Купили уже
      </span>
      :<span className=' font-medium text-sm'>{data.buyAlready}</span>
    </div>
  )
}
