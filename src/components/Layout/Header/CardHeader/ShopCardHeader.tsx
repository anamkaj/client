import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../store/Redux/storeHook'
import { getLocalStore } from '../../../../store/Redux/Product/cartSlise'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const ShopCardHeader = () => {
  const countCart = useAppSelector((state) => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLocalStore())
  }, [])

  return (
    <div className=' hidden md:block'>
      <Link to={'/order'}>
        <div className='flex justify-center items-center'>
          <div className='relative py-2'>
            <div className=' bottom-9 absolute left-6'>
              <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                {countCart?.length}
              </p>
            </div>
            <AiOutlineShoppingCart className=' w-10 h-10'/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ShopCardHeader
