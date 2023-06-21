import React, { useEffect, useRef, useState } from 'react'
import {
  decrementCounter,
  incrementCounter,
  removeToCart,
} from '../../../../store/Redux/Product/cartSlise'
import { useAppDispatch } from '../../../../store/Redux/storeHook'
import { addCartStore } from '../../../../helpers/Model/Store/Redux/type.product'

type CountProp = {
  product: addCartStore
}

export const CounterProduct = ({ product }: CountProp) => {
  const dispatch = useAppDispatch()
  const ref = useRef(product.totalCount)

  useEffect(() => {
    if (product.totalCount < 1) {
      dispatch(
        removeToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.img,
          imgFolder: product.imgFolder,
          totalCount: 1,
          sale: product.sale,
        }),
      )
    }
  }, [product.totalCount])

  const incrementStorePrice = () => {
    dispatch(
      incrementCounter({
        id: product.id,
        totalCount: 1,
      }),
    )
  }
  const decrementStorePrice = () => {
    dispatch(
      decrementCounter({
        id: product.id,
        totalCount: 1,
      }),
    )
  }

  return (
    <div>
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
          value={product.totalCount}
          onChange={() => (ref.current = product.totalCount)}
          min={1}
          max={40}
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
    </div>
  )
}
