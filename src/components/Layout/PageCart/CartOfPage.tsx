import React, { FC, ReactNode, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/storeHook'
import {
  removeToCart,
  incrementCart,
  decrementCart,
} from '../../../store/Product/cartSlise'
import { addCartStore } from '../../../store/Product/helper/model/type.product'

interface IOrderCart {
  orderCart: addCartStore
}

export const CartOfPage = ({ orderCart }: IOrderCart) => {
  const dispatch = useAppDispatch()
  const totalSum = () => {
    // @ts-ignore
    return (orderCart.price * orderCart.totalCount).toFixed(2)
  }
  useEffect(() => {
    // @ts-ignore
    if (orderCart.totalCount < 1) {
      dispatch(
        removeToCart({
          id: orderCart.id,
          title: orderCart.title,
          price: orderCart.price,
          img: orderCart.img,
          totalCount: 1,
        }),
      )
    }
  }, [orderCart.totalCount])

  const incrementStorePrice = () => {
    dispatch(
      incrementCart({
        id: orderCart.id,
        price: orderCart.price,
        title: orderCart.title,
        img: orderCart.img,
        totalCount: 1,
      }),
    )
  }
  const decrementStorePrice = () => {
    dispatch(
      decrementCart({
        id: orderCart.id,
        price: orderCart.price,
        title: orderCart.title,
        img: orderCart.img,
        totalCount: 1,
      }),
    )
  }

  return (
    <>
      <tr className='bg-white border-b'>
        <td className='flex mobile:flex-wrap md:flex-nowrap text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
          <img
            src={orderCart.img}
            alt={orderCart.title}
            className='w-[80px] h-[80px] rounded-lg sm:w-30'
          />
          <span className={'w-[400px] whitespace-normal px-4 '}>
            {orderCart.title}
          </span>
        </td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap '>
          Divisat
        </td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
          <div className=' border-gray-100'>
            <span
              onClick={() => decrementStorePrice()}
              className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
            >
              {' '}
              -{' '}
            </span>
            <input
              className='h-6 w-8  text-center text-xs outline-none appearance-none m-0'
              type='text'
              value={orderCart.totalCount}
              min={1}
            />
            <span
              onClick={() => {
                incrementStorePrice()
              }}
              className='cursor-pointer rounded-r bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
            >
              {' '}
              +{' '}
            </span>
          </div>
        </td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
          {orderCart.totalCount && <p className='text-sm'>{totalSum()} руб.</p>}
        </td>
      </tr>
    </>
  )
}
