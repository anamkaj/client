import React from 'react'

type TotalProp = {
  localStore: string | null
  totalCart: number
}

export const TotalPrice = ({ localStore, totalCart }: TotalProp) => {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>Общая стоимость</p>
        <div className=''>
          <p className='mb-1 text-lg font-bold'>
            {localStore
              ? Math.trunc(parseInt(localStore) * 0.9)
              : Math.trunc(totalCart * 0.9)}
            .00 ₽
          </p>
          <p className='text-sm text-gray-700'>НДС</p>
        </div>
      </div>
    </>
  )
}
