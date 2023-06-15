import React from 'react'
import { PropCart } from '../CartPrice'
import { BsCheck } from 'react-icons/bs'



export const CartHeader = ({ product }: PropCart) => {
  return (
    <div className='flex items-center justify-between'>
      <h3 className=' font-light '>
        {product[0].quantity !== 0 ? (
          <span className=' text-sm flex items-center'>
            <BsCheck className=' text-green-400 h-6 w-6' />В наличии, более{' '}
            <span className=' ml-2 text-gray-800 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300  rounded '>
              {' '}
              {product[0].quantity} шт.
            </span>
          </span>
        ) : (
          <span className=' text-sm font-bold text-green-500 bg-slate-100 p-2 '>
            Заказная позиция{' '}
          </span>
        )}
      </h3>

      <div>
        <img
          className=' w-16 '
          src={`https://tmk-v.ru:8080/img/brend/${product[0].brendImg}`}
          alt=''
        />
      </div>
    </div>
  )
}
