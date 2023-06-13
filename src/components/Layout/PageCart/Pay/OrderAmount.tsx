import React from 'react'
import { addCartStore } from '../../../../helpers/Model/Store/Redux/type.product'

type OrderProp = {
  totalCartPrice: number
  data: addCartStore[]
  totalSale: number
}

export const OrderAmount = ({ totalCartPrice, data, totalSale }: OrderProp) => {
  return (
    <>
      <div className=' p-4 bg-slate-100 rounded-t-lg'>
        <h2 className='uppercase text-black font-semibold mb-5 mt-5'>
          Ваша корзина
        </h2>
      </div>
      <div className=' flex flex-col'>
        <div className='mb-2 p-4 flex justify-between'>
          <p className='text-gray-700 font-semibold'>Товары ({data.length})</p>
          <p className='text-gray-700 font-semibold text-lg'>
            Итого: {totalCartPrice.toLocaleString('ru')}₽
          </p>
        </div>
        <div className='flex justify-between p-4'>
          <p className=' text-red-500 font-semibold'>Скидка</p>
          <p className=' text-lg text-red-500 font-semibold '>
            {totalSale.toLocaleString('ru')}₽
          </p>
        </div>
      </div>
    </>
  )
}
