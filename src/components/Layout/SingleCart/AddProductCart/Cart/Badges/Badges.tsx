import React from 'react'
import { PropCart } from '../../CartPrice'

export const WholeSaleBadges = ({ product }: PropCart) => {
  return (
    <div className={'flex gap-4 mt-2'}>
      <p className=' animate-fade-left inline-block py-1 px-4 leading-none whitespace-nowrap font-light bg-amber-300 text-black text-[14px] rounded'>
        Оптом выгоднее на{' '}
        <span className=' inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-green-500 text-white rounded ml-2'>
          {product && Math.round(product[0].price * 0.1).toFixed(2)} ₽
        </span>
      </p>
    </div>
  )
}

export const DiscountBadges = ({ product }: PropCart) => {
  return (
    <div className={' mt-2'}>
      <span className=' text-white text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500  rounded '>
        {' '}
        -{product[0].discount} %
      </span>
      <p className='line-through text-right animate-fade-left inline-block py-2 px-4 leading-none whitespace-nowrap font-light text-gray-900 text-xl rounded'>
        {product[0].price.toLocaleString('ru')} ₽ за 1 шт.
      </p>
    </div>
  )
}
