import React from 'react'
import CartImg from '../../../images/component_img/Cart/header-cart-image.png'

export const EmptyBasket = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-lg text-center mt-20 w-full'>
          Добавьте товары и они появятся в корзине
        </h2>
        <img className='w-1/6 mt-5' src={CartImg} alt='' />
      </div>
    </div>
  )
}
