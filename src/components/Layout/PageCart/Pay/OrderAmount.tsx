import React from 'react'
import { useAppSelector } from '../../../../store/Redux/storeHook'

type OrderProp = {
  localStore: string | null
  totalCart: number
}

export const OrderAmount = ({ localStore, totalCart }: OrderProp) => {
  const totalCartLength = useAppSelector((state) => state.cartReducer.cart)

  if (localStore == null) {
    localStore = '0'
  }
  return (
    <>
      <div>
        <h2 className={'uppercase text-black font-bold mb-5 mt-5'}>
          Ваша корзина
        </h2>
      </div>
      <div className='mb-2 flex justify-between'>
        <p className='text-gray-700'>Товары ({totalCartLength.length})</p>
        <p className='text-gray-700'>
          Итого:{' '}
          {localStore
            ? Math.trunc(parseInt(localStore))
            : Number(localStore).toFixed(2)}{' '}
          ₽
        </p>
      </div>
      <div className='flex justify-between'>
        <p className='text-gray-700'>Скидка</p>
        <p className='text-gray-700'>
          {localStore
            ? Math.trunc(parseInt(localStore) * 0.1)
            : Math.trunc(totalCart * 0.1)}{' '}
          ₽
        </p>
      </div>
    </>
  )
}
