import React, { useState } from 'react'
import { usePopularProduct } from '../hook/get.popular.product'
import { Carousels } from '../../UI/Carusel/Carusel'

export const Carousel = () => {
  const { data, isLoading } = usePopularProduct()

  return (
    <div className='mt-12'>
      <div className=' mt-4 mb-6'>
        <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          Товары месяца
        </p>
      </div>

      <Carousels data={data} isLoading={isLoading} />
    </div>
  )
}
