import React from 'react'
import { FormCart } from '../../UI/Form/FormCart/FormCart'
import { useAppSelector } from '../../../../store/Redux/storeHook'
import { OrderAmount } from './OrderAmount'
import { TotalPrice } from './TotalPrice'

export const PayTotal = () => {
  const totalCart = useAppSelector((state) => state.cartReducer.total)
  const localStore = localStorage.getItem('totalCart' || '')

  return (
    <div className=' flex flex-col rounded-lg border bg-white shadow-md p-4'>
      <FormCart />

      <OrderAmount localStore={localStore} totalCart={totalCart} />

      <hr className='my-4' />
      <TotalPrice localStore={localStore} totalCart={totalCart} />
      <button className='mt-8 rounded-md bg-blue-500 py-2 px-4 font-medium text-blue-50 hover:bg-blue-600 uppercase'>
        Перейти к оформлению
      </button>
    </div>
  )
}
