import React, { useState } from 'react'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { useCountProductStore } from '../hook/dispatch.inc.dec'

export type PropCount = {
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  countPopupProduct: number
  product: IGProduct[]
}

export const CounterProduct = ({
  setCountPopupProduct,
  countPopupProduct,
  product,
}: PropCount) => {
  const { incrementProduct, decrementProduct } = useCountProductStore({
    setCountPopupProduct,
    countPopupProduct,
    product,
  })

  return (
    <div className=' h-10 w-32 mt-5'>
      <div className='flex flex-row items-center  h-8 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          disabled={countPopupProduct == 1}
          data-action='decrement'
          className=' bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
          onClick={() => decrementProduct()}
        >
          <span className='m-auto text-2xl font-thin'>−</span>
        </button>
        <span className=' flex justify-center items-center h-8 w-20 bg-gray-200 font-semibold text-md text-black'>
          {countPopupProduct}
        </span>
        <button
          data-action='increment'
          className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
          onClick={() => incrementProduct()}
        >
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
    </div>
  )
}
