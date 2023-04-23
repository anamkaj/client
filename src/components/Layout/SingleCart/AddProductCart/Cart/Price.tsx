import React from 'react'
import { DiscountBadges } from './Badges/Badges'
import { IGProduct } from '../../../../../helpers/model/model.products'

type PropPrice = {
  price: number
  product: IGProduct[]
}

export const Price = ({ product, price }: PropPrice) => {
  return (
    <div>
      {/* <WholeSaleBadges product={product} /> */}
      <>
        <DiscountBadges product={product} />
        <p className='flex items-center mt-5 font-bold text-3xl '>
          {price.toLocaleString('ru')}₽
        </p>
      </>
    </div>
  )
}
