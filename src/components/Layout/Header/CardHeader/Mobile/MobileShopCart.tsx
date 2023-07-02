import React, { useEffect } from 'react'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../store/Redux/storeHook'
import { getLocalStore } from '../../../../../store/Redux/Product/cartSlise'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const MobileShopCart = () => {
  const countCart = useAppSelector((state) => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLocalStore())
  }, [])

  return (
    <>
      <Link to={'/order'}>
        <div className='flex justify-center items-center p-4'>
          <div className='relative py-2'>
            <div className=' bottom-7 absolute left-4'>
              <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                {countCart?.length}
              </p>
            </div>
            <AiOutlineShoppingCart className=' w-8 h-8' />
          </div>
        </div>
      </Link>
    </>
  )
}
