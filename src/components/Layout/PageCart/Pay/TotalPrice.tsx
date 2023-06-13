import React from 'react'

type TotalProp = {
  totalCartPrice: number
  totalSale: number
}

export const TotalPrice = ({ totalCartPrice, totalSale }: TotalProp) => {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>Общая стоимость</p>
        <div className=''>
          <p className='mb-1 text-lg font-bold'>
            {Math.trunc(totalCartPrice - totalSale).toLocaleString('ru')} ₽
          </p>
          <p className='text-sm text-gray-700'>без НДС</p>
        </div>
      </div>
    </>
  )
}
